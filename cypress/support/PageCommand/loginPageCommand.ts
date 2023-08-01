/// <reference types="cypress"/>

import Login from "../PageMethod/loginPage";

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

Cypress.Commands.add("loginWithValidCredentials", () => {
    login.getLoginUrl();
    login.getUsername().clear().type("raghu").should('have.value','raghu')
    login.getPassword().clear().type("raghu@#1").should('have.value', "raghu@#1");
    login.getLogin().click();
    cy.url().should('contain', '/index.html');
  });

Cypress.Commands.add("loginWithInvalidCredentials", () => {

    login.getLoginUrl();
    login.getUsername().clear().type("raghu@#1").should('have.value', "raghu@#1");
    login.getPassword().clear().type("test").should('have.value', "test");
    login.getLogin().click();
    login.getValidationMessage().should("have.text", "Invalid Credential, check credential and try again");
    cy.url().should('not.contain', '/index.html');
  });

Cypress.Commands.add("verifyFunctionalityOfCancelButton", () => {
 
    login.getLoginUrl();
    login.getUsername().clear().type("raghu").should('have.value','raghu')
    login.getPassword().clear().type("raghu@#1").should('have.value', "raghu@#1");
    login.getCancel().click();
    login.getUsername().should('not.have.value', 'raghu');
    login.getPassword().should('not.have.value', 'raghu@#1');
    cy.url().should('not.contain', '/index.html');
  });
