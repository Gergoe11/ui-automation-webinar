'use strict'
const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');
const careerPage = new CareerPage();
const { Given, When, Then, setDefaultTimeout, After, Status } = require('cucumber');
const { Button, browser } = require('protractor');
const fs = require('fs');
const path = require('path');
setDefaultTimeout(GLOBAL_TIMEOUT);

Given('The career site is opened', function () {
  return careerPage.loadJobs();
});

When(/The "(.+)" is clicked/, function (element) {
  browser.wait(ec.elementToBeClickable(careerPage[element]), GLOBAL_TIMEOUT)
  return careerPage[element].click();
});

When(/The submit button is clicked/, function () {
  return careerPage.clickSubmit();
});

When(/The (.+) is written into the field/, function (profession) {
  return careerPage.writeKeyword(profession);
});

When(/The (.+) is submitted/, function (city) {
  return careerPage.writeInput(city);
});

When(/The result is clicked/, function () {
  return careerPage.suggestedClick();
});

Then(/The "(.+)" should be visible/, function (element) {
  return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
});

Then(/The url expected to match with the url of the searched (.+)/, function (job) {
  let pageurl = browser.getCurrentUrl();
  return expect(pageurl).to.eventually.contain(job);
});

Then(/The "(.+)" should contain the text "(.+)"/, function (element, expectedText) {
  browser.wait(ec.elementToBeClickable(careerPage[element]), GLOBAL_TIMEOUT)
  let actualText = careerPage[element].getText();
  return expect(actualText).to.eventually.contain(expectedText)
});

Given('The career page is opened', function () {
  return careerPage.load();
});

Then(/The "(.+)" should be displayed/, function (element) {
  return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
});

Given(/The "(.+)" is opened/, function (loadjobs) {
  return careerPage.loadJobs();
});

Then(/The url expected to be the url of the "(.+)"/, function (url) {
  let pageurl = browser.getCurrentUrl();
  return expect(pageurl).to.eventually.contain(careerPage.url);
});

Then(/It should contain "(.+)"/, function (element) {
  browser.wait(ec.visibilityOf(careerPage[element]), GLOBAL_TIMEOUT)
  return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
});

Then(/The "(.+)" should have the text "(.+)"/, function (element, text) {
  let actualText = careerPage[element].getText();
  return expect(actualText).to.eventually.contain(text);
});

After(function () {
  protractor.browser.takeScreenshot().then(function (screenshot) {
    const screenshots = path.join(process.cwd(), './cucumber');

    fs.writeFile(screenshots + '/test.png', screenshot, 'base64', function (err) {
      if (err) {
        throw err;
      }
      console.log('File saved.');
    });
  });
});

