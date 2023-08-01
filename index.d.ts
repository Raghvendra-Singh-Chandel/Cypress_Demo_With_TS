
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to load a fixture file.
       * @example cy.fixture('filename')
       */
      fixture<T = any>(fileName: string): Chainable<T>;
    }
  }