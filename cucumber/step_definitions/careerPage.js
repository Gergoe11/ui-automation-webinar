'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();


const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { Button } = require('protractor');

setDefaultTimeout(GLOBAL_TIMEOUT);


Given('The career page is opened', function () {
    return careerPage.load();
  });



Then(/^The "(.+)" should be displayed$/, function (element) {
    return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
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


Then(/The url expected to be the url of the "(.+)"/, function (url) {
    let pageurl = browser.getCurrentUrl();
    return expect(pageurl).to.eventually.contain(careerPage.url);
  });



Then(/^It should contain "(.+)"$/, function (element) {
   return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
  });

  Then(/The "(.+)" should have the text "(.+)"/, function (element,text) {
    let viewJob = careerPage[element].getText();
    return expect(viewJob).to.eventually.contain(text);
   });


