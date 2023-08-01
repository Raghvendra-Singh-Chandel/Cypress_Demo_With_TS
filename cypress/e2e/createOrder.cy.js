describe("create order end to end scenario",()=> {
    beforeEach("login",()=> {
        cy.loginWithValidCredentials()
    })
    /**
     * End To End Scenario: Placed Order
     */

    it("create order",()=> {
        cy.selectProductToBuy()
        cy.placeOrder()
        cy.fillAllDetailsToProcessedPaymentPage()
        cy.fillPaymentDetailsAndCompletePayment()
    })
})