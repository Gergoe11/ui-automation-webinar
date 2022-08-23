Feature: EPAM job searching
  As a Job searcher
  I want to browser through EPAM Job offers by various criteria
  So I can find to best fitting offer for me

Scenario: Searching at EPAM career page
Given The career page is opened

Then The logo should be visible
And The search form should be displayed
And The keyword input field should be visible
And The submit button should be visible
And The location filter box arrow should be visible

When The location filter box is selected
Then The location arrow should be displayed 

Given The jobs page is opened
Then The logo again should be visible
And The url expected to be the url of the job page
And it should contain a job description
And it should contain the apply button


