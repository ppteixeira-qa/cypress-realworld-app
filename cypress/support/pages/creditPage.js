class CreditPage {

    positiveCredit(money, notecredit){
       cy.get('[data-testid=AttachMoneyIcon]').click()
       cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
       cy.get('#amount').type(money)
       cy.get('#transaction-create-description-input').type(notecredit)
       cy.get('[data-test="transaction-create-submit-payment"]').click()
       cy.get('.MuiAlert-message').contains('Transaction Submitted!')
       cy.get('[data-test="new-transaction-return-to-transactions"]').click()
       cy.get('[data-test="sidenav-home"]').click()
       cy.get('[data-test="nav-personal-tab"]').click()
    }
}
export default CreditPage