import detailPage from "../PageMethod/detailsPage";

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
    const personDetails = {
        
            "fullName": "Raghvendra Singh",
            "email": "rchandel@clanap.com",
            "phone": "8765675434",
            "DOB": "2001-12-01",
            "country": "USA",
            "city": "London",
            "zipCode": "123456",
            "errorMessage" : {
                "fullName": "Please enter your full name",
                "email": "Please enter a valid email address",
                "phone": "Please enter a valid phone number",
                "zipCode": "Please enter your zip code"
            }
        }
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