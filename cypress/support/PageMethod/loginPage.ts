/// <reference types = "cypress"/>
class Login
{
    getLoginUrl() {
        return cy.visit('http://127.0.0.1:8000/login.html')
    }
    getUsername() {
        return cy.get('#username')
    }
    getPassword() {
        return cy.get('#password')
    }
    getLogin() {
        return cy.get('#login')
    }
    getCancel() {
        return cy.get('#cancel')
    }
    getValidationMessage () {
        return cy.get('#error')
    }
   
}

export default Login