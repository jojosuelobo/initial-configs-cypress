describe('template spec', () => {
  it('Usando o env', () => {
    cy.visit(Cypress.config('baseUrl'))
    cy.log(Cypress.env('ambiente'))
  })

  it('Usando Fixtures', () => {
    cy.visit(Cypress.config('baseUrl'))
    cy.fixture('example').then((data) => {
      cy.log(data.name)
    })
  });

  it('Usando Commands', () => {
    cy.visit(Cypress.config('baseUrl'))
    cy.customCommand('Olá')
  })
})