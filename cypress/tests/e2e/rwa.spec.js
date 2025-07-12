import userData from "../../fixtures/userData.json"
import LoginPage from "../../support/pages/loginPage"
import LoginNewUserPage from "../../support/pages/loginNewUserPage"
import CreditPage from "../../support/pages/creditPage"
import IncompPage from "../../support/pages/incompPage"

const loginPage = new LoginPage()
const loginNewUserPage = new LoginNewUserPage()
const creditPage = new CreditPage()
const incompPage = new IncompPage()


describe('RWA Login', () => {
  it('Valid Login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)    
  })
})

describe('RWA Login Fail', () => {
  it('Invalid Login', () => {
   loginPage.accessLoginPage()
   loginPage.wrongLoginAlert(userData.userFail.username, userData.userFail.password)
  });
});

describe('RWA New User', () => {
  it('New User Register', () => {
    loginPage.accessLoginPage()
    loginNewUserPage.loginNewUser(userData.userNew.firstname, userData.userNew.lastname, userData.userNew.username, userData.userNew.password, userData.userNew.bank, userData.userNew.bankaccount, userData.userNew.banknumber)
  });
});

describe('RWA Credit - Transaction History', () => {
  it('Positive Credit', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    creditPage.positiveCredit(userData.userCredit.money, userData.userCredit.notecredit)
  });
});

describe('RWA New User', () => {
  it('Incomplete Register', () => {
    loginPage.accessLoginPage()
    incompPage.incompleteregister(userData.userIncomplete.firstname, userData.userIncomplete.lastname, userData.userIncomplete.username, userData.userIncomplete.password)
  });
});
