describe('example to-do app', () => {
  it('can filter for uncompleted tasks', () => {
    cy.visit('/contacts');
    cy.get('button').should('have.text', 'Select file');
  });

  it('can filter for uncompleted tasks', () => {
    cy.visit('/contacts');
    cy.get('select').should('have.value', 'Choose a location');
  });
});
