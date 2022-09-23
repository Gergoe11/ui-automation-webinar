'use strict'
const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();
const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');
const { browser } = require('protractor');
const path = require('path');

describe('Search for job', function () {
    this.timeout(GLOBAL_TIMEOUT);

    this.beforeEach(() => {
        careerPage.load();
        return careerPage.acceptAll();
    });

    describe('Careers page', () => {
        it('should be opened', () => {
            return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
        });
    });

    describe('Search form', () => {
        it('should be displayed', () => {
            return expect(careerPage.searchForm.isDisplayed()).to.eventually.be.true;
        });

        describe('Location filter box', () => {
            beforeEach(() => {
                careerPage.selectLocation();
            });
            it('should provide a way to filter a specific location', () => {
                return expect(careerPage.locationArrow.isDisplayed()).to.eventually.be.true;
            });

            it('should contain country', async () => {
                const countryName = careerPage.suggestedCity.getText();
                return expect(countryName).to.eventually.contain("Hungary");
            });
        });
    });

    describe('Keyword input', () => {
        it('should have a keyword input field', () => {
            return expect(careerPage.keywordInput.isDisplayed()).to.eventually.be.true;
        });

        it('should have a submit button', () => {
            return expect(careerPage.submitButton.isDisplayed()).to.eventually.be.true;
        });
    });
});

describe('Listed jobs', function () {
    this.timeout(GLOBAL_TIMEOUT);

    this.beforeEach(() => {
        careerPage.loadJobs();
        careerPage.keywordInput.click();
        careerPage.keywordInput.sendKeys('Budapest');
        careerPage.submitButton.click();
        return browser.sleep(2000);
    });

    this.afterEach(() => {
        protractor.browser.takeScreenshot().then(function (screenshot) {
            const screenshots = path.join(process.cwd(), './mocha');

            fs.writeFile(screenshots + '/test.png', screenshot, 'base64', function (err) {
                if (err) {
                    throw err;
                }
                console.log('File saved.');
            });
        });
    });

    describe('Jobs page', () => {
        it('should be opened', () => {
            let pageurl = browser.getCurrentUrl();
            return expect(pageurl).to.eventually.contain('Budapest');
        });

        it('should display apply button after searching', () => {
            return expect(careerPage.applyButton.isDisplayed()).to.eventually.be.true;
        });

        it('should contain job description ', () => {
            return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;
        });

        it('should contain the text with input keyword', () => {
            const viewjob = careerPage.applyButton.getText()
            return expect(viewjob).to.eventually.contain('VIEW AND APPLY');
        });
    });
});

module.exports = CareerPage;