describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('signup', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000', { failOnStatusCode: false });
    cy.get('#email').clear('hailemariamkefale19@gmail.com');
    cy.get('#email').type('hailemariamkefale19@gmail.com');
    cy.get('[data-v-inspector="components/LoginForm.vue:18:9"]').click();
    cy.get('#name').clear('Hailemariam');
    cy.get('#name').type('Hailemariam');
    cy.get('#surname').clear('Kefale');
    cy.get('#surname').type('Kefale');
    cy.get('#email').clear('hailemariamkefale19@gmail.com');
    cy.get('#email').type('hailemariamkefale19@gmail.com');
    cy.get('#password').clear('1');
    cy.get('#password').type('12345678');
    cy.get('#confirmPassword').clear('1');
    cy.get('#confirmPassword').type('12345678');
    cy.get('#terms').check();
    cy.get('.p-3').click();
    cy.get('.max-w-md > .flex > :nth-child(1)').clear('1');
    cy.get('.max-w-md > .flex > :nth-child(1)').type('1');
    cy.get('.flex > :nth-child(2)').clear('2');
    cy.get('.flex > :nth-child(2)').type('2');
    cy.get('.flex > :nth-child(3)').clear('3');
    cy.get('.flex > :nth-child(3)').type('3');
    cy.get('.flex > :nth-child(4)').clear('4');
    cy.get('.flex > :nth-child(4)').type('4');
    cy.get('.flex > :nth-child(5)').clear('5');
    cy.get('.flex > :nth-child(5)').type('5');
    cy.get('.flex > :nth-child(6)').clear('6');
    cy.get('.flex > :nth-child(6)').type('6');
    cy.get('.max-w-md > .w-full').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').clear('r');
    cy.get('#email').type('registered@example.com');
    cy.get('[data-v-inspector="components/LoginForm.vue:18:9"]').click();
    cy.get('#password').clear('c');
    cy.get('#password').clear('co');
    cy.get('#password').type('correctpassword');
    cy.get('.bg-white').click();
    /* ==== End Cypress Studio ==== */
  });
})