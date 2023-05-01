/// <reference types="cypress" />

describe('test About page', () => {
  it('test about title', () => {
    cy.visit('/about');
    cy.get('*[class^="about-title"]').should(
      'have.text',
      'We are professional experienced gardenersprofessional experienced'
    );
  });
});
