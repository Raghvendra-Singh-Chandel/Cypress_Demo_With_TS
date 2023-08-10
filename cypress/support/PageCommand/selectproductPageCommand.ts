/// <reference types = "cypress"/>

import selectProductToBuy from "../PageMethod/selectProduct";
import * as productDetails from "../../fixtures/product.json"


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