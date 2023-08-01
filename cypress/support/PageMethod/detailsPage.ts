/// <reference types = "cypress"/>

class detailPage {

    getfullName() {
        return cy.get("#fullName")
    }

    getFullNameError() {
        return cy.get('#fullNameError')
    }
    getEmail() {
        return cy.get("#email")
    }
    getEmailError() {
        return cy.get("#emailError")
    }
    getPhoneNumber () {
        return cy.get("#phone")
    }
    getPhoneError() {
        return cy.get("#phoneError")
    }
    getDOB() {
        return cy.get("#dateOfBirth")
    }

    getSexMale() {
        return cy.get("input[value='male']")
    }

    getCountry() {
        return cy.get("#country")
    }
    getCity() {
        return cy.get("#city")
    }
    getZipCode() {
        return cy.get("#zipCode")
    }
    getZipCodeError() {
        return cy.get("#zipCodeError")
    }

    getUploadImage() {
        return cy.get("#profileImage")
    }

    getConfirmCheckBox() {
        return cy.get("#confirmCheckbox")
    }
    getPaymentPageButton() {
        return cy.get("#submit-details")
    }


}
export default detailPage