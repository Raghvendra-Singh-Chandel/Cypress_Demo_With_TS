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