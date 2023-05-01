/// <reference types="cypress" />

describe('test GardenApp', () => {
  it('test search in garden app', () => {
    cy.visit('/');
    cy.get('input[type="search"]').should('have.text', '');
  });

  it('test footer info', () => {
    cy.visit('/');
    cy.get('*[class^="page"]').should('be.visible');
    cy.get('*[class^="legacy"]').should('have.text', '©2022');
    cy.get('*[class^="school"]').should('have.text', 'Rolling Scopes School');
    cy.get('.social > a').should('have.length', 4);
  });
});
