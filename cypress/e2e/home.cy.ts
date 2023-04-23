/// <reference types="cypress" />

describe('test Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('test input', () => {
    cy.get('input').should('have.text', '');
  });

  it('test filter dropdown', () => {
    cy.get('[data-testid="select-element-sorting"]').should('be.visible');
    cy.get('[data-testid="select-element-sorting"]').should('have.value', 'relevant');
  });
});
