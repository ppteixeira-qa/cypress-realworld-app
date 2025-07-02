describe('RWA Login', () => {
  it('Valid Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('Judah_Dietrich50')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test=sidenav-home').contains('Home')
  });
});

describe('RWA Credit', () => {
  it('Saldo Positivo', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('Judah_Dietrich50')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test=sidenav-home').contains('Home')
    cy.get('[data-testid=AttachMoneyIcon]').click()
    cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
    cy.get('#amount').type('700.00')
    cy.get('#transaction-create-description-input').type('Evidência')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('.MuiAlert-message').contains('Transaction Submitted!')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()
    cy.get('[data-test="sidenav-home"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
  });
});

describe('RWA New User', () => {
  it('New User Register', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Michael')
    cy.get('#lastName').type('Jackson')
    cy.get('#username').type('Jackson5')
    cy.get('#password').type('123arroz')
    cy.get('#confirmPassword').type('123arroz')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#username').type('Jackson5')
    cy.get('#password').type('123arroz')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type('WallStreet')
    cy.get('#bankaccount-routingNumber-input').type('987654321')
    cy.get('#bankaccount-accountNumber-input').type('123456789')
    cy.get('[data-test="bankaccount-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains('Finished')
    cy.get('[data-test="user-onboarding-next"]').click()
  });
});

describe('RWA New User', () => {
  it('Incomplete Register', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Michael')
    cy.get('#lastName').type('Jackson')
    cy.get('#username').type(' ')
    cy.get('#password').type('123arroz')
    cy.get('#confirmPassword').type('123arroz')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#password').type('123arroz')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('#username-helper-text').contains('Username is required')
  });
});

describe('RWA Login Fail', () => {
  it('Invalid Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('judah_50')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  });
});

describe('RWA Login Fail', () => {
  it('Username Empty', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type(' ')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  });
});

describe('RWA New User Fail', () => {
  it('New user register incomplete informations', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('2323')
    cy.get('#lastName').type('Lopes')
    cy.get('#username').type('2323lopes')
    cy.get('#password').type('123arroz')
    cy.get('#confirmPassword').type('arroz')
    cy.get('#confirmPassword-helper-text').contains('Password does not match')
  });
});



// {
//       "password": "s3cret"
//       "id": "WHjJ4qR2R2",
//       "uuid": "6caf81db-e190-487a-9863-f7c5ab8a872c",
//       "firstName": "Lia",
//       "lastName": "Rosenbaum",
//       "username": "Judah_Dietrich50",
//       "password": "$2a$10$nSaCsTPTtbbPTnFXBH0GZu0ExpNMud3d1IuKOC/6a9gwAHkdhppeu",
//       "email": "Nigel54@hotmail.com",
//       "phoneNumber": "990-583-8419",
//       "avatar": "https://avatars.dicebear.com/api/human/WHjJ4qR2R2.svg",
//       "defaultPrivacyLevel": "public",
//       "balance": 49474,
//       "createdAt": "2023-12-07T04:39:38.383Z",
//       "modifiedAt": "2024-03-07T00:07:36.510Z"
//     }