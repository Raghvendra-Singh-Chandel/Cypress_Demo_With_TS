import "../support/commands"

describe("Verify Login Functionality", ()=> {

    it ("login in tho the application with Invalid user name and password", ()=> {
        cy.loginWithInvalidCredentials()
    })

    it ("Verify the functionality of cancel button", ()=> {
        cy.verifyFunctionalityOfCancelButton()
    })

    it ("login in tho the application with valid user name and password", ()=> {
        cy.loginWithValidCredentials()
    })
})

/**
 * Verify login functionality in mobile view
 */
describe ("Login functionality in mobile view",()=> {
    beforeEach(()=> {
        cy.viewport("samsung-s10")
    })



it ("login in tho the application with Invalid user name and password", ()=> {
    cy.loginWithInvalidCredentials()
})


it ("Verify the functionality of cancel button", ()=> {
    cy.verifyFunctionalityOfCancelButton()
})

it ("login in tho the application with valid user name and password", ()=> {
    cy.loginWithValidCredentials()
})
})