import detailPage from "../PageMethod/detailsPage";
import * as personDetails from "../../fixtures/details.json"

const details  =  new detailPage()

declare global {
    namespace Cypress {
      interface Chainable <Subject> {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        fillAllDetailsToProcessedPaymentPage:() => Chainable<Subject>;
    }
  }
}

Cypress.Commands.add("fillAllDetailsToProcessedPaymentPage",()=> {
    details.getFullNameError().invoke('text').should('contain',personDetails.errorMessage.fullName)
    details.getfullName().type(personDetails.fullName).should('have.value',personDetails.fullName)
    details.getEmail().type(personDetails.email).should('have.value',personDetails.email)
    details.getPhoneNumber().type(personDetails.phone).should('have.value',personDetails.phone)
    details.getDOB().type(personDetails.DOB).should('have.value',personDetails.DOB)
    details.getCountry().select(personDetails.country)
    details.getSexMale().click().should('be.checked')
    details.getCity().type(personDetails.city).should('have.value',personDetails.city)
    details.getZipCode().type(personDetails.zipCode).should('have.value',personDetails.zipCode)
    details.getUploadImage().selectFile("./cypress/support/ImageData/profile.png")
    details.getConfirmCheckBox().click().should('be.checked')
    details.getPaymentPageButton().click()
    cy.url().should('contain','payment')

    })