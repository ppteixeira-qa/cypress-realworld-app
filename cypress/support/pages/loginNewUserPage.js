class LoginNewUserPage {

    loginNewUser(firstname, lastname, username, password, bank, bankaccount, banknumber) {
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type(firstname)
        cy.get('#lastName').type(lastname)
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#confirmPassword').type(password)
        cy.get('[data-test="signup-submit"]').click()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
        cy.get('[data-test="user-onboarding-next"]').click()
        cy.get('#bankaccount-bankName-input').type(bank)
        cy.get('#bankaccount-routingNumber-input').type(bankaccount)
        cy.get('#bankaccount-accountNumber-input').type(banknumber)
        cy.get('[data-test="bankaccount-submit"]').click()
        cy.get('[data-test="user-onboarding-dialog-title"]').contains('Finished')
        cy.get('[data-test="user-onboarding-next"]').click()
    }
}

export default LoginNewUserPage