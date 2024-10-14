describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000', { failOnStatusCode: false });
    cy.get('#email').clear('r');
    cy.get('#email').type('registered@example.com');
    cy.get('[data-v-inspector="components/LoginForm.vue:18:9"]').click();
    cy.get('#password').clear('c');
    cy.get('#password').type('correctpassword');
    cy.get('.bg-white').click();
    /* ==== End Cypress Studio ==== */
  });
})