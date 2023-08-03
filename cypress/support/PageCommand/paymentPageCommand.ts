import payment from "../PageMethod/payment";
import * as data from "../../fixtures/paymentDetails.json"

const pay             =    new payment()

declare global {
    namespace Cypress {
      interface Chainable <Subject> {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        fillPaymentDetailsAndCompletePayment:() => Chainable<Subject>;
    }
  }
}
Cypress.Commands.add("fillPaymentDetailsAndCompletePayment",()=> {
    pay.getCardNumber().type(data.cardNumber).should("have.value",data.cardNumber)
    pay.getCardHolderName().type(data.cardHolderName).should("have.value",data.cardHolderName)
    pay.getExpiryDate().type(data.expiryDate).should("have.value",data.expiryDate)
    pay.getCVV().type(data.cvv).should("have.value",data.cvv)
    pay.getPayNowBtn().click()
    cy.url().should('contain','orderPlaced')
})