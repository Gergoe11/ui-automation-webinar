'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();


const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { Button } = require('protractor');

setDefaultTimeout(GLOBAL_TIMEOUT);


Given('The career site is opened', function () {
    careerPage.load();
    return careerPage.acceptAll();

  });

  When(/The (.+) is submitted/, function (string) {
    careerPage.selectLocation();
    return careerPage.sendKeys();
  });

  Then(/The page "(.+)" should be visible/, function (element) {
    return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
  });

  Then(/The url expected to match with the url of the (.+)/, function (desiredpage) {
    switch(desiredpage){
      case 'debrecenJobs':
        return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary');
      case "szegedJobs":
        return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=szeged&country=Hungary');
    }
        
  });

  Then(/it should contain the "job description"/, function () {
    browser.wait(ec.visibilityOf(careerPage.jobInfo), GLOBAL_TIMEOUT);
    return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;;
  });

  Then(/the "apply" button should contain the text "view and apply"/, function () {
    const viewJob = careerPage.applyButton.getText();
    return expect(viewJob).to.eventually.contain('VIEW AND APPLY')
  });
