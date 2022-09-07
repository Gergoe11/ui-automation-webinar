'use strict'

const { browser, protractor } = require("protractor");

const ec = protractor.ExpectedConditions;



class CareerPage {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.acceptButton = element(by.id('onetrust-accept-btn-handler'));
        this.searchForm = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.locationArrow = element(by.css('.select2-selection__arrow'))
        //this.country = element(by.css('.select2 select2-container select2-container--default form-component__field select2-container--below select2-container--focus'));
        this.country = element(by.id('select2-new_form_job_search_1445745853_copy-location-result-kftm-all_Hungary'));
        this.submitButton = element(by.css('.recruiting-search__submit'));
        this.keywordInput = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.searchwordInput = element(by.css('.select2-search__field'));
        //this.searchwordInput = element(by.css('.select2-selection__rendered'));
        this.selectresult = element(by.css('.select2-results__option select2-results__option--highlighted'));
        this.applyButton = element.all(by.css('.search-result__item-apply'));
        this.jobInfo = element(by.css('.search-result__item-name'));
        this.contactButton = element(by.css('.button__content button__content--desktop'));
        this.allLocations = element(by.css('span[title="All Cities in Hungary"]'));
        this.url = 'https://www.epam.com/careers/job-listings?country=all'
        this.allCountries = element.all(by.css('strong.select2-results__group'));
        this.allCities = element.all(by.css('li.select2-results__option'));
        //this.suggestedCity = element(by.css('.select2-results__option select2-results__option--highlighted'));
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

    selectLocation() {
        browser.wait(ec.elementToBeClickable(this.locationArrow), GLOBAL_TIMEOUT);
        return this.locationArrow.click();
       
    }

        
    


  
    clicksearchWord(){
              browser.wait(ec.elementToBeClickable(this.searchwordInput), GLOBAL_TIMEOUT);
        return this.searchwordInput.click();
    }   

    suggestedClick(){
        browser.wait(ec.visibilityOf(this.suggestedCity), GLOBAL_TIMEOUT);
        return this.suggestedCity.click();
    }

    selectCity(city) {

    let place = element(by.cssContainingText('li.select2-results__option', `${city}`));
    browser.wait(ec.elementToBeClickable(place), GLOBAL_TIMEOUT);
    return place.click();   

    }
        
    clickSubmit () {
    browser.wait(ec.elementToBeClickable(this.submitButton), GLOBAL_TIMEOUT);
    return this.submitButton.click();
    }
   
   

    writeInput(city) {
        browser.wait(ec.visibilityOf(this.searchwordInput), GLOBAL_TIMEOUT);
        return this.searchwordInput.sendKeys(city);
                
        // .sendKeys(protractor.Key.ENTER)
        
    }

    writeKeyword(profession) {
        browser.sleep(3000);
        this.keywordInput.click();
        return this.keywordInput.sendKeys(profession)
    }



}



module.exports = CareerPage;

