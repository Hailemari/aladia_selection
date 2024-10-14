describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('loginwithgoogle', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000', { failOnStatusCode: false });
    cy.get('.space-y-2 > .bg-white').click()
    /* ==== End Cypress Studio ==== */
  });
})