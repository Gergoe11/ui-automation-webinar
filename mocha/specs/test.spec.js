'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();
const fs = require('fs');
const { getEnvironmentData } = require('worker_threads');
const { browser } = require('protractor');
const path = require('path');

  
  
describe('Search for job', function() {
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
                return careerPage.selectLocation();
            });
            it('should provide a way to filter a specific location', () => {
                return expect(careerPage.locationArrow.isDisplayed()).to.eventually.be.true;

            });

            it('should contain country', async() => {
                const countryName = await element(by.xpath('//*[@id="select2-new_form_job_search_1445745853_copy-location-results"]/li[25]/strong')).getText();
                expect(countryName).to.contain("Hungary");
                return expect(careerPage.country.isDisplayed()).to.eventually.be.true;
                 
            });
            
        });

        
    });

    describe('Keyword input',  () => {
        it('should have a keyword input field', () =>{
            return expect(careerPage.keywordInput.isDisplayed()).to.eventually.be.true;
        });

        it('should have a submit button', () => {
            return expect(careerPage.submitButton.isDisplayed()).to.eventually.be.true;

        });


               
    });

    
});


describe('Listed jobs', function() {
    this.timeout(GLOBAL_TIMEOUT);

    this.beforeEach(() => {
       return careerPage.loadJobs();
       
    });

     // https://stackoverflow.com/questions/38321028/how-to-take-screenshot-in-protractor-on-failure-of-test-cases
    //   olyan esetre találtam ezt a kódot, ahol a framework: 'custom'
    // const path = require('path') kell hozzá
   // ez már csinál képet, feltöltöttem (test.png), amiről csinálta pedig "hiba.jpg" néven 

    this.afterEach(() => {
        protractor.browser.takeScreenshot().then(function(screenshot) {
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
           
            return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary');
        });

        it('should contain job description ', () => {
            
            return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;
        });

        it('should contain the text with input keyword', () => {
            return expect(careerPage.applyButton.getText()).to.eventually.contain('VIEW AND APPLY');
                        
        });

       
    });
    
    


});
    
module.exports = CareerPage;