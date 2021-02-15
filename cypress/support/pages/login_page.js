import { expect } from "chai"

const inputEmail = '#email'
const inputPassword = '#password'
const btnEntrar = '#blip-login'
const btnCadastrar = '#blip-register'
const linkEsqueceuSenha = '#login-forgot-password'

const url = Cypress.config("baseUrl")

export class LoginPage {

    acessaLogin() {
        cy.visit(url);
    }
    
    preencheLogin(email, pwd) {
        cy.get(inputEmail).type(email);
        cy.get(inputPassword).type(pwd);
    }

    clickEntrar() {
        cy.get(btnEntrar).click();
    }

    acessarCadastro() {
        cy.get(btnCadastrar).click();
    }

}