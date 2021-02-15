import { expect } from "chai"

    const loginInfo = 'div[class="login-info"]'

    
export class MyaccountPage {

    validaLogin(user){
        cy.get(loginInfo).should('contain', user)
    }
    
}