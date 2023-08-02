/// <reference types="cypress"/>

import Login from "../PageMethod/loginPage";
import * as loginData from "../../fixtures/login.json";

const login = new Login();

declare global {
namespace Cypress {
  interface Chainable<Subject> {
    // Add this line to extend the existing Chainable interface with custom commands
    loginWithValidCredentials: () => Chainable<Subject>;
    loginWithInvalidCredentials: () => Chainable<Subject>;
    verifyFunctionalityOfCancelButton: () => Chainable<Subject>;
  }
}
}

Cypress.Commands.add("loginWithValidCredentials",()=> {
  login.getLoginUrl()
  login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
  login.getPassword().clear().type(loginData.password).should('have.value',loginData.password)
  login.getLogin().click()
  cy.url().should('contain','/index.html')
})

Cypress.Commands.add("loginWithInvalidCredentials",()=> {
  login.getLoginUrl()
  login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
  login.getPassword().clear().type("test").should('have.value',"test")
  login.getLogin().click()
  login.getValidationMessage().should("have.text",loginData.validationMessage)
  cy.url().should('not.contain','/index.html')
})

Cypress.Commands.add("verifyFunctionalityOfCancelButton",()=> {
  login.getLoginUrl()
  login.getUsername().clear().type(loginData.username).should('have.value',loginData.username)
  login.getPassword().clear().type(loginData.password).should('have.value',loginData.password)
  login.getCancel().click()
  login.getUsername().should('not.have.value',loginData.username)
  login.getPassword().should('not.have.value',loginData.password)
  cy.url().should('not.contain','/index.html')
})