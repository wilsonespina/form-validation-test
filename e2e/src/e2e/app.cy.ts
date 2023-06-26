describe('springload-forms-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should have correct heading', () => {
    cy.get('h1').contains('Contact Form');
  });

  it('should submit form', () => {
    cy.get('#email').type('testemail@email.com')
    cy.get('#password').type('12345678910')
    cy.get('form').contains('Submit').click();

    // Checking the placeholder window alert text
    cy.on('window:alert',(txt) => {
    	expect(txt).to.contains('email: testemail@email.com');
    	expect(txt).to.contains('password: 1234567891');
    });
  });
});
