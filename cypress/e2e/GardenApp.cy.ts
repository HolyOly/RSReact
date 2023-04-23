/// <reference types="cypress" />

describe('example to-do app', () => {
  it('can filter for uncompleted tasks', () => {
    cy.visit('/');
    cy.get('input[type="search"]').should('have.text', '');
  });
});
