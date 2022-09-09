Feature: EPAM job searching
  As a Job searcher
  I want to browser through EPAM Job offers by various criteria
  So I can find to best fitting offer for me

  #step definiton file: jobPage.js

Scenario: Searching at EPAM career page
Given The career page is opened

Then The "logo" should be visible
And The "searchForm" should be displayed
And The "keywordInput" should be displayed
And The "submitButton" should be displayed
And The "locationArrow" should be displayed

Given The "jobs page" is opened
Then The "logo" should be visible
And The url expected to be the url of the "jobs page"
And It should contain "jobInfo"
And The "applyButton" should have the text "VIEW AND APPLY"





