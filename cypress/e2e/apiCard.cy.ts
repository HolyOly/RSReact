/// <reference types="cypress" />

describe('test Api cards', () => {
  it('generate cards and check pagination', () => {
    cy.visit('/');
    cy.get('input[type="search"]').should('have.text', '');
    cy.get('input[type="search"]').type('cat{enter}');

    cy.get('*[class^="card"]').contains(/cat/i);
    cy.get('*[class^="page-link side"]').should('have.length', 2);
    cy.get('*[class^="page-link side"]').first().should('have.text', 'prev');
    cy.get('*[class^="card"]').first().click({ force: true });
  });
});
