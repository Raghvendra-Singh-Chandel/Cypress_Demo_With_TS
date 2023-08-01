/// <reference types = "cypress"/>

class payment {
    getCardNumber() {
        return cy.get("#cardNumber")
    }
    getCarderrorMessage() {
        return cy.get("#cardNumberError")
    }
    getCardHolderName() {
        return cy.get("#cardName")
    }
    getCardHolderNameErrorMessage () {
        return cy.get("#cardNameError")
    }
    getExpiryDate() {
        return cy.get("#expiryDate")
    }
    getExpiryError() {
        return cy.get("#expiryDateError")
    }
    getCVV() {
        return cy.get("#cvv")
    }
    getCVVError() {
        return cy.get("#cvvError")
    }
    getPayNowBtn() {
        return cy.get("#payNowBtn")
    }



}
export default payment