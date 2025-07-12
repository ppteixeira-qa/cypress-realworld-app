class LoginPage {

    accessLoginPage(){
        cy.visit('http://localhost:3000')
    }
    loginWithUser(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test=sidenav-home').contains('Home')
    }
    wrongLoginAlert(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
    }
}

export default LoginPage