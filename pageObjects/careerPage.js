'use strict'

const { browser } = require("protractor");

const ec = protractor.ExpectedConditions;



class CareerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.acceptButton = element(by.css('onetrust-accept-btn-handler'));
        this.searchForm = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.locationArrow = element(by.css('.select2-selection__arrow'));
        //this.country = element(by.xpath('//*[@id="select2-new_form_job_search_1445745853_copy-location-results"]/li[25]/strong'));
        this.country = element(by.css('li[aria-label="Hungary"] strong'));
        this.city = element(by.xpath('//*[@id="jobSearchFilterForm"]/div[2]/div/span/span[1]/span/span[1]'));
        this.submitButton = element(by.css('.recruiting-search__submit'));
        this.keywordInput = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.applyButton = element.all(by.css('.search-result__item-apply'));
        this.searchresHeading = element(by.css('.search-result__heading'))
        this.jobInfo = element(by.css('.search-result__item-name'));
        this.contactButton = element(by.css('.button__content button__content--desktop'));
        this.allButtons =  this.applyButton.count();
        this.url = 'https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary';
        
        
    }

    load() {
    browser.get('https://www.epam.com/careers');
    return browser.wait(ec.elementToBeClickable(this.logo), GLOBAL_TIMEOUT);
    };

    loadJobs() {
        
        browser.get(this.url);
        return browser.wait(ec.elementToBeClickable(this.contactButton), GLOBAL_TIMEOUT);
    }

    acceptAll() {
        return browser.isElementPresent(this.acceptButton)
        .then(isPresent => {
            if(isPresent){
            this.acceptButton.click();
            }
        });
    };

    selectLocation() {
       //await browser.wait(ec.visibilityOf(this.locationArrow), GLOBAL_TIMEOUT); 
       this.locationArrow.click();
       browser.wait(ec.visibilityOf(this.country), GLOBAL_TIMEOUT); 
       this.country.click();  
      
    }

    searchKey() {
        this.keywordInput.sendKeys('Debrecen');
        browser.wait(ec.visibilityOf(this.submitButton), GLOBAL_TIMEOUT)
        this.submitButton.click();
        const applyButton2 = this.applyButton.first();
        browser.wait(ec.visibilityOf(this.applyButton2), GLOBAL_TIMEOUT);
     

    }




}



module.exports = CareerPage;