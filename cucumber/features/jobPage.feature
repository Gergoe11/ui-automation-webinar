Feature: Epam job searching
The user wants to search for jobs in 
two different EPAM locations



Scenario Outline: Jobs page searching - location
Given The career site is opened

When The "all locations" option is selected  
When The <searchword> is submitted
Then The "logo" should be visible

And it should include the "jobInfo"
And The "applyButton" should contain the text "VIEW AND APPLY"
And The url expected to match with the url of the <country>


Examples:
    | searchword      | country      | 
    | debrecen        | Hungary      |
    | szeged          | Hungary      |   













