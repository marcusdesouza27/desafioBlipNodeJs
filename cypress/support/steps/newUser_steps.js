/* global Given, Then When */

const { LoginPage } = require("../pages/login_page");
const { CadastroUsuario } = require("../pages/newuser_pages");
const { MyaccountPage } = require("../pages/myaccount_page");
const loginPage = new LoginPage();
const cadastroUsuario = new CadastroUsuario();
const myaccountPage = new MyaccountPage();


Given("user loads registration page", () => {
    loginPage.acessaLogin();
    loginPage.acessarCadastro();
})

When("user doesn't filled all mandatories data", () => {
    cadastroUsuario.criausuario("Nome Completo", "novoemail@teste.com", "teste123", "www.teste.com")
})

When("perform de registration to save", () => {
    
})

Then("user sees an error messagem about invalid data", () => {
    cy.fixture('messages').then((data) => {
        cadastroUsuario.validaErroRegistro(data.msgErrorReg)
    });
})