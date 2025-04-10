describe('template spec', () => {
  it('Usando o env', () => {
    cy.visit('https://example.cypress.io')
    cy.log(Cypress.env('ambiente'))
  })

  it('Usando Fixtures', () => {
    cy.fixture('example').then((data) => {
      cy.log(data.name)
    })
  });
})