describe('RWA', () => {
  it('Valid Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('Judah_Dietrich50')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test=sidenav-home').contains('Home')
  });
});

describe('RWA', () => {
  it('Invalid Login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type('judah_50')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains('Username or password is invalid')
  });
});

describe('RWA', () => {
  it('New user register', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('Luli')
    cy.get('#lastName').type('Cero')
    cy.get('#username').type('CeroLuli')
    cy.get('#password').type('123arroz')
    cy.get('#confirmPassword').type('123arroz')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#username').type('CeroLuli')
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

describe('RWA', () => {
  it.only('New user register incomplete informations', () => {
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