Feature: Login
    As an User I wish perfmor login

Background: Load Login Page
    Given user loads login page

    Scenario:  Valid Login
        When user fill in your login data
        And click to submit the login
        Then user can see your logged area