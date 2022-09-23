'use strict'
const { browser, protractor } = require("protractor");
const ec = protractor.ExpectedConditions;

class CareerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.acceptButton = element(by.id('onetrust-accept-btn-handler'));
        this.searchForm = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.locationArrow = element(by.css('.select2-selection__arrow'))
        this.submitButton = element(by.css('.recruiting-search__submit'));
        this.keywordInput = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.searchwordInput = element(by.css('.select2-search__field'));
        this.applyButton = element(by.css('.search-result__item-apply:first-child'));
        this.jobInfo = element(by.css('.search-result__item-name:first-child'));
        this.url = 'https://www.epam.com/careers/job-listings?country=all'
        this.suggestedCity = element(by.css('.select2-results__options.open'));
    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
    };

    loadJobs() {
        browser.get(this.url);
        browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
        return this.acceptAll();
    }

    acceptAll() {
        return browser.isElementPresent(this.acceptButton)
            .then(isPresent => {
                if (isPresent) {
                    this.acceptButton.click();
                }
            });
    };

    clickElement(element) {
        browser.wait(ec.elementToBeClickable(this.element), GLOBAL_TIMEOUT);
        return this.element.click(element);
    }

    selectLocation() {
        browser.wait(ec.elementToBeClickable(this.locationArrow), GLOBAL_TIMEOUT);
        return this.locationArrow.click();
    }

    writeInput(city) {
        browser.wait(ec.visibilityOf(this.searchwordInput), GLOBAL_TIMEOUT);
        return this.searchwordInput.sendKeys(city);
    }

    writeKeyword(profession) {
        browser.sleep(3000);
        this.keywordInput.click();
        return this.keywordInput.sendKeys(profession)
    }
}

module.exports = CareerPage;

