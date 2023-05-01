describe('test Form', () => {
  beforeEach(() => {
    cy.visit('/contacts');
  });

  it('1', () => {
    cy.get('button').should('have.text', 'Select file');
  });

  it('2', () => {
    cy.get('select').should('have.value', 'Choose a location');
  });

  it('3', () => {
    cy.get('input[type="text"]').type('John Weed');
    cy.get('input[type="text"]').should('have.value', 'John Weed');
  });

  it('4', () => {
    cy.get('input[type="submit"]').should('have.value', 'Submit');
  });

  it('5', () => {
    cy.get('[data-testid="male-input"]').check();
    cy.get('[data-testid="male-input"]').should('be.checked');
    cy.get('[data-testid="female-input"]').should('not.be.checked');
  });

  it('6', () => {
    cy.get('[data-testid="female-input"]').check();
    cy.get('[data-testid="female-input"]').should('be.checked');
    cy.get('[data-testid="male-input"]').should('not.be.checked');
  });

  it('7', () => {
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should('be.checked');
    cy.get('input[type="checkbox"]').should('have.value', 'accepted');
  });

  it('8', () => {
    cy.get('input[type="text"]').type('123');
    cy.get('input[type="submit"]').click({ force: true });
    cy.get('*[class^="warning-message"]').contains("name mustn't contain numbers");
  });

  it('9', () => {
    cy.get('input[type="text"]').type('John Weed');
    cy.get('input[type="text"]').should('have.value', 'John Weed');

    cy.get('input[type="date"]').type('2021-03-10');

    cy.get('[data-testid="select-element"]')
      .should('be.visible')
      .select('Turkey')
      .should('have.value', 'Turkey');

    cy.get('[data-testid="female-input"]').check();
    cy.get('[data-testid="female-input"]').should('be.checked');

    cy.get('*[class^="form-label input-file-label"]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'file.jpeg',
      mimeType: 'image/jpeg',
      lastModified: Date.now(),
    });

    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should('be.checked');

    cy.get('input[type="submit"]').click();

    cy.get('*[class^="card"]').should('be.visible');
    cy.get('*[class^="card-description card-description_form"]').should('have.length', 4);
    cy.get('*[class^="card-description card-description_form"]')
      .first()
      .should('have.text', 'Birthday: 2021-03-10');
    cy.get('*[class^="card-description card-description_form"]')
      .eq(1)
      .should('have.text', 'Country: Turkey');
    cy.get('*[class^="card-description card-description_form"]')
      .eq(2)
      .should('have.text', 'Sex: female');
    cy.get('*[class^="card-description card-description_form"]')
      .eq(3)
      .should('have.text', 'Ability to send notifications: yes');
    cy.get('*[class^="card-image"]').should('be.visible');
    cy.get('*[class^="card-img card-img_form"]').should('be.visible');
    cy.get('*[class^="card-title"]').should('be.visible').should('have.text', 'John Weed');
  });
});
