'use strict';
'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();


const { Given, When, Then, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(GLOBAL_TIMEOUT);


Given('The career page is opened', function () {
    return careerPage.load();
  });



Then(/^The "(.+)" should be displayed$/, function (element) {
    return expect(careerPage[element].isDisplayed()).to.eventually.be.true;;
  });



Then(/^The "(.+)" should be visible$/, function (element) {
   return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
  });



When(/^The "(.+)" is selected$/, function (selectlocation) {
   return careerPage.selectLocation();
  });


Given(/^The "(.+)" is opened$/, function (loadjobs) {
    return careerPage.loadJobs();
  });


Then(/The url expected to be the url of the "jobs page"/, function () {
    return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary');
  });

 Then(/it should contain a "job description"/, function () {
    return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;
  });


Then(/it should contain the "apply button"/, function () {
   const viewJob = careerPage.applyButton.getText()
   return expect(viewJob).to.eventually.contain('VIEW AND APPLY');
  });
