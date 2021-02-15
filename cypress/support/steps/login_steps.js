/* global Given, Then When */

const { LoginPage } = require("../pages/login_page");
const { MyaccountPage } = require("../pages/myaccount_page");
const loginPage = new LoginPage();
const myaccountPage = new MyaccountPage();

Given("user loads login page", () => {
    loginPage.acessaLogin();
})

When("user fill in your login data", () => {
    cy.fixture('userData').then((data) => {
        loginPage.preencheLogin(data.email, data.password)
    })
})

When("click to submit the login", () => {
    loginPage.clickEntrar();
})

Then("user can see your logged area", () => {
    cy.fixture('userData').then((data) => {
        myaccountPage.validaLogin(data.nome);
    });
})