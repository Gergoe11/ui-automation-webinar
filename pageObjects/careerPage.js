'use strict'

const { browser, protractor } = require("protractor");

const ec = protractor.ExpectedConditions;



class CareerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.acceptButton = element(by.id('onetrust-accept-btn-handler'));
        this.searchForm = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.locationArrow = element(by.xpath('//*[@id="jobSearchFilterForm"]/div[2]/div/span/span[1]/span/span[2]/b'));
        //this.country = element(by.xpath('//*[@id="select2-new_form_job_search_1445745853_copy-location-results"]/li[25]/strong'));
        this.country = element(by.css('li[aria-label="Hungary"] strong'));
        this.submitButton = element(by.css('.recruiting-search__submit'));
        this.keywordInput = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.locationInput = element(by.css('.select2-selection__rendered'));
        this.searchwordInput = element(by.css('.select2-search__field'));
        this.selectresult = element(by.css('.select2-results__option select2-results__option--highlighted'));
        this.applyButton = element.all(by.css('.search-result__item-apply'));
        this.jobInfo = element(by.css('.search-result__item-name'));
        this.contactButton = element(by.css('.button__content button__content--desktop'));
        //this.allLocations = element(by.xpath('//*[@id="jobSearchFilterForm"]/div[2]/div/span[1]'));
        this.allLocations = element(by.css('span[title="All Cities in Hungary"]'));
        this.url = 'https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary'

    }

    load() {
        browser.get('https://www.epam.com/careers');
        return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
    };

    loadJobs() {

        browser.get(this.url);
        return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
    }

    acceptAll() {
        return browser.isElementPresent(this.acceptButton)
            .then(isPresent => {
                if (isPresent) {
                    this.acceptButton.click();
                }
            });
    };

    selectLocation() {
        browser.wait(ec.elementToBeClickable(this.locationArrow), GLOBAL_TIMEOUT); 
        this.locationArrow.click();
       


    }

    location() {
        browser.wait(ec.elementToBeClickable(this.allLocations), GLOBAL_TIMEOUT); 
        this.allLocations.click();
    }


    sendKeys(city) {
        //browser.wait(ec.visibilityOf(this.keywordInput), GLOBAL_TIMEOUT)
        this.keywordInput.sendKeys(city)
       .sendKeys(protractor.Key.ENTER);
       // this.submitButton.click();
        //browser.wait(ec.visibilityOf(this.applyButton), GLOBAL_TIMEOUT)
    }

    



    writeInput(city) {
       
        this.keywordInput.sendKeys(city)
         .sendKeys(protractor.Key.ENTER)
    }



}



module.exports = CareerPage;