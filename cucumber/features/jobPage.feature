Feature: Epam job searching
The user wants to search for different available jobs in 
2 EPAM locations



Scenario Outline: Jobs page searching - location
Given The career site is opened

When The location arrow is clicked
And The <city> is submitted
And The result is clicked
And The <profession> is written into the field
And The submit button is clicked
Then The "logo" should be visible
And The url expected to match with the url of the searched <job>
And The "applyButton" should contain the text "VIEW AND APPLY"


Examples:
  | city     | profession | job        |
  | Debrecen | developer  | developer  |
  | Szeged   | automation | automation |













