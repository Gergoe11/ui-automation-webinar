Feature: EPAM job searching
  As a Job searcher
  I want to browser through EPAM Job offers by various criteria
  So I can find to best fitting offer for me

Scenario: Searching at EPAM career page
Given The career page is opened

Then The "logo" should be visible
And The "searchForm" should be displayed
And The "keywordInput" should be displayed
And The "submitButton" should be visible
And The "locationArrow" should be visible

When The "location filter box" is selected
Then The "locationArrow" should be displayed 

Given The "jobs page" is opened
Then The "logo" should be visible
And The url expected to be the url of the "jobs page"
And it should contain a "job description"
And it should contain the "apply button"






