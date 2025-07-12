class IncompPage {

    incompleteregister (firstname, lastname, username, password){
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type(firstname)
        cy.get('#lastName').type(lastname)
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#confirmPassword').type(password)
        cy.get('[data-test="signup-submit"]').click()
        cy.get('#password').type(password)
        cy.get('#username-helper-text').contains('Username is required')
    }

}
export default IncompPage