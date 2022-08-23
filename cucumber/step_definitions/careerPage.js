'use strict';
'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();
const fs = require('fs');

const path = require('path');


const { Given, When, Then, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(GLOBAL_TIMEOUT);


Given('The career page is opened', function () {
    return careerPage.load();
  });

Then('The logo should be visible', function () {
    return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
  });

Then('The search form should be displayed', function () {
    return expect(careerPage.searchForm.isDisplayed()).to.eventually.be.true;;
  });

Then('The keyword input field should be visible', function () {
    return expect(careerPage.keywordInput.isDisplayed()).to.eventually.be.true;
  });

Then('The submit button should be visible', function () {
   return expect(careerPage.submitButton.isDisplayed()).to.eventually.be.true;
  });

Then('The location filter box arrow should be visible', function () {
   return expect(careerPage.locationArrow.isDisplayed()).to.eventually.be.true;
  });

When('The location filter box is selected', function () {
   return careerPage.selectLocation();
  });

Then('The location arrow should be displayed', function () {
    return expect(careerPage.locationArrow.isDisplayed()).to.eventually.be.true;;
  });


Given('The jobs page is opened', function () {
    return careerPage.loadJobs();
  });

Then('The logo again should be visible', function () {
    return expect(careerPage.logo.isDisplayed()).to.eventually.be.true
  });

Then('The url expected to be the url of the job page', function () {
    return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary');
  });

 Then('it should contain a job description', function () {
    return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;
  });


Then('it should contain the apply button', function () {
   const viewjob = careerPage.applyButton.getText()
   return expect(viewjob).to.eventually.contain('VIEW AND APPLY');
  });
