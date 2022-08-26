Feature: Epam job searching
The user wants to search for jobs in 
two different EPAM locations



Scenario Outline: Jobs page searching
Given The career site is opened

When The <searchword> is submitted
Then The page "logo" should be visible
And The url expected to match with the url of the <desiredPage>
And it should contain the "job description"
And the "apply" button should contain the text "view and apply"

Examples:
    | searchword      | desiredpage      | 
    | debrecen        | debrecenJobs     |
    | szeged          | szegedJobs       |   







