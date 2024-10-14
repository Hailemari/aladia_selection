describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('forgotpassword', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000', { failOnStatusCode: false });
    cy.get('#email').clear('c');
    cy.get('#email').type('registered@example.com');
    cy.get('[data-v-inspector="components/LoginForm.vue:18:9"]').click();
    cy.get('#password').click();
    cy.get('.text-right > .text-gray-400').click();
    cy.get('#recoveryEmail').clear('registered@example.com');
    cy.get('#recoveryEmail').type('registered@example.com');
    cy.get('.p-3').click();
    /* ==== End Cypress Studio ==== */
  });
})