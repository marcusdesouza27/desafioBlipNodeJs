const inputNome = '#FullName'
const email = '#Email'
const password = '#Password'
const phoneNumber = '#PhoneNumber'
const empresaSite = '#CompanySite'
const tamanhoEmpresa = 'input[class*="bp-c-rooftop"]'
const checkboxTermos = '.checkbox__icon'
const submitButton = '#submitButton'
const empresaTamFirstOpt = 'li[data-value="Band1_4"]'
const errorMessage = '.error'

export class CadastroUsuario {
    criausuario(nome, newemail, pwd, site) {
        cy.get(inputNome).type(nome)
        cy.get(email).type(newemail)
        cy.get(password).type(pwd)
        cy.get(phoneNumber).type(' ')
        cy.get(empresaSite).click()
        cy.get(empresaSite).type(site)
        cy.get(tamanhoEmpresa).click()
        cy.get(empresaTamFirstOpt).click()
    }

    clickCadastrar() {
        submitButton.click
    }

    validaErroRegistro(message){
        cy.get('.error').should('contain', message)
    }

}