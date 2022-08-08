'use strict'

const { expect } = require('chai');
const CareerPage = require('../../pageObjects/careerPage');

const careerPage = new CareerPage();


describe('Search for job', function() {
    this.timeout(GLOBAL_TIMEOUT);

    this.beforeEach(() => {
        careerPage.load();
        return careerPage.acceptAll();
    });

    describe('Careers page', () => {
        it('should be opened', () => {
            return expect(careerPage.logo.isDisplayed()).to.eventually.be.true;
        });
  
    });

    describe('Search form', () => {
        it('should be displayed', () => {
            return expect(careerPage.searchForm.isDisplayed()).to.eventually.be.true;
        });

        describe('Location filter box', () => {
            beforeEach(() => {
                return careerPage.selectLocation();
            })
            it('should provide a way to filter a specific location', () => {
                return expect(careerPage.locationArrow.isDisplayed()).to.eventually.be.true;

            });

            it('should contain country', async() => {
                const countryName = await element(by.xpath('//*[@id="select2-new_form_job_search_1445745853_copy-location-results"]/li[25]/strong')).getText();
                expect(countryName).to.contain("Hungary");
                return expect(careerPage.country.isDisplayed()).to.eventually.be.true;
                 
            });
            
        });

        
    });

    describe('Keyword input',  () => {
        it('should have a keyword input field', () =>{
            return expect(careerPage.keywordInput.isDisplayed()).to.eventually.be.true;
        });

        it('should have a submit button', () => {
            return expect(careerPage.submitButton.isDisplayed()).to.eventually.be.true;

        });
               
    });

    
});


describe('Listed jobs', function() {
    this.timeout(GLOBAL_TIMEOUT);

    this.beforeEach(() => {
        careerPage.loadJobs();
    });

    describe('Jobs page', () => {
        it('should be opened', () => {
           
            return expect(careerPage.url).to.equal('https://www.epam.com/careers/job-listings?query=debrecen&country=Hungary');
        });

        it('should contain job description ', () => {
            
            return expect(careerPage.jobInfo.isDisplayed()).to.eventually.be.true;
        });

       
    });
    
    


});
    
module.exports = CareerPage;