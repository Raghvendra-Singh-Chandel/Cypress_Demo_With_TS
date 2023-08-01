/// <reference types = "cypress"/>

class selectProductToBuy {
    getProduct() {

        return cy.contains("Men Black Action Parkview Lifestyle Shoes")
    
    }
    addproductIncart() {
        return cy.get("#button button")
    }

    productName() {
        return cy.get("#productDetails h1")
    }

    productDescription() {
        return cy.get("#details p")
    }

    productCount() {
        return cy.get("#badge")
    }

    placeOrderButton() {
        return cy.get("#button a")
    }

    productVerify() {
        return cy.get("#box h3")
    }



     



}
export default selectProductToBuy