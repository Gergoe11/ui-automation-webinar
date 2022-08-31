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

  When(/The "all locations" option is selected/, function(){
      return careerPage.selectAll();
  });

  When(/The (.+) is submitted/, function (searchword) {
    browser.wait(ec.visibilityOf(careerPage.keywordInput), GLOBAL_TIMEOUT)
    return careerPage.sendKeys(searchword);
  });

 

  Then(/The "(.+)" should be visible/, function (element) {
    return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
  });

  Then(/The url expected to match with the url of the (.+)/, function (country) {
    let pageUrl = browser.getCurrentUrl();
    return expect(pageUrl).to.eventually.contain(country);
        
  });

  Then(/it should include the "(.+)"/, function (element) {
    browser.wait(ec.visibilityOf(careerPage[element]), GLOBAL_TIMEOUT);
    return expect(careerPage[element].isDisplayed()).to.eventually.be.true;;
  });

  Then(/The "(.+)" should contain the text "(.+)"/, function (element, expectedText) {
    const actualText = careerPage[element].getText();
    return expect(actualText).to.eventually.contain(expectedText)
  });

 