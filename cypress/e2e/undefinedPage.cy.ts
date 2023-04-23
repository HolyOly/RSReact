/// <reference types="cypress" />

describe('test undefined page', () => {
  it('test 404 text', () => {
    cy.visit('/sdfgv');
    cy.get('*[class^="hit-the-floor"]').should('have.text', '404');
  });
});
