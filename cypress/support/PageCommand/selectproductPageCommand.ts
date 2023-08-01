/// <reference types = "cypress"/>

import selectProductToBuy from "../PageMethod/selectProduct";


const productToBuy  =       new selectProductToBuy()

declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        // Add this line to extend the existing Chainable interface with custom commands
        selectProductToBuy: () => Chainable<Subject>;
        placeOrder: () => Chainable<Subject>;
      }
    }
    }


Cypress.Commands.add("selectProductToBuy",()=> {
    const productDetails = {
        "productName": "Men Black Action Parkview Lifestyle Shoes",
    
        "productdescription": "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome"
    }

   
    productToBuy.getProduct().click()
    cy.url().should('contain','/contentDetails.html')
    productToBuy.productName().should('have.text',productDetails.productName)
    productToBuy.productDescription().should('have.text',productDetails.productdescription)
    productToBuy.productCount().should('have.text',' 0 ')
    productToBuy.addproductIncart().click()
    productToBuy.productCount().should('have.text', '1')
})

Cypress.Commands.add("placeOrder",()=> {
    cy.fixture("product").then((productDetails)=> {
    productToBuy.productCount().click()
    cy.url().should('contain','cart')
    productToBuy.productVerify().should('contain', productDetails.productName + " × 1")
    productToBuy.placeOrderButton().click()
    cy.url().should('contain','enter_details')
    })   
})