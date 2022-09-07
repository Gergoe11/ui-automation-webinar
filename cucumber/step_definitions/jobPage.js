'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();


const { Given, When, Then, setDefaultTimeout, After, Status } = require('cucumber');
const { Button, browser } = require('protractor');


setDefaultTimeout(GLOBAL_TIMEOUT);



Given('The career site is opened', function () {
  return careerPage.loadJobs();
  

});

When(/The (.+) is selected/, function(city) {
    return careerPage.citySelector();

})

When(/The location arrow is clicked/, function() {
  return careerPage.selectLocation();
});

When(/The "(.+)" is clicked/, function(element) {
    return careerPage.clicksearchWord();
});

When(/The (.+) is picked/, function (city) {
    return careerPage.selectCity(city);
});

When(/The location country is clicked/, function () {
  return careerPage.selectCountry();
});

When(/The (.+) is chosen/, function (city) {
  return careerPage.selectCity(city);
});



When(/The submit button is clicked/, function() {
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
  })

Then(/The "(.+)" should be visible/, function (element) {
  return expect(careerPage[element].isDisplayed()).to.eventually.be.true;
});

Then(/The url expected to match with the url of the searched (.+)/, function (job) {
  let pageUrl = browser.getCurrentUrl();
  return expect(pageUrl).to.eventually.contain(job);

});

Then(/it should include the "(.+)"/, function (element) {
  browser.wait(ec.visibilityOf(careerPage[element]), GLOBAL_TIMEOUT);
  return expect(careerPage[element].isDisplayed()).to.eventually.be.true;;
});

Then(/The "(.+)" should contain the text "(.+)"/, function (element, expectedText) {
  const actualText = careerPage[element].getText();
  return expect(actualText).to.eventually.contain(expectedText)
});


