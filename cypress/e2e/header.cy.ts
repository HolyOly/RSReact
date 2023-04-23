/// <reference types="cypress" />

describe('test header', () => {
  it('test links', () => {
    cy.visit('/');
    cy.get('*[class^="links-item"]').should('have.length', 3);
    cy.get('*[class^="links-item"]').first().click({ force: true });
    cy.get('*[class^="links-item active"]').should('be.visible');
  });
});
