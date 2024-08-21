export const Login = () => {
  cy.session('login_session', () => {
      cy.visit("https://test").wait(5000)
      cy.get('input[type="email"]').type('test1234@mail.com')
      cy.get('input[type="password"]').type('test1234')
      cy.get('button[type="submit"]').should('be.visible').click().wait(500)
      cy.url().should('include', '/home');
  })
}

export const Fail_Login = () => {
      cy.visit("https://test").wait(5000)
      cy.get('input[type="email"]').type('EEE@#!@#!@#EE')
      cy.get('input[type="password"]').type('!@#######$$$')
      cy.get('button[type="submit"]').click().wait(500)
      cy.get('.error-message').should('be.visible')
      .and('contain', 'Invalid username or password');
}

describe('login_test', () => {
  it('login', () => {
    Login();
  });
  it('login_fail', () => {
    Fail_Login();
  });
});







