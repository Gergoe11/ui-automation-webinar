Feature: Epam job searching
The user wants to search for jobs in 
two different EPAM locations



Scenario Outline: Jobs page searching - location
Given The career site is opened

When The "locationArrow" is selected
And The "location" is selected
And  The <city> keyword is written into the field
Then The "logo" should be visible

And it should include the "jobInfo"
And The "applyButton" should contain the text "VIEW AND APPLY"
And The url expected to match with the url of the searched <country>


Examples:
    | city             | country         | 
    | szeged           | Hungary         |
    | debrecen         | Hungary         |   













