describe('example to-do app', () => {
  it('can filter for uncompleted tasks', () => {
    cy.visit('/');
    cy.get('input').should('have.text', '');
  });

  // it('can filter for uncompleted tasks', () => {
  //   cy.visit('/');
  //   cy.get('select').should('have.value', 'Choose a location');
  // });
});
