Feature: Cadastrar Usuario

     Background: 
     Given user loads registration page

@mandatoryFields
Scenario: Registro - campos obrigatorios
     When user doesn't filled all mandatories data
     And perform de registration to save
     Then user sees an error messagem about invalid data