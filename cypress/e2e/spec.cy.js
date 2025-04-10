describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log(Cypress.env('ambiente'))
  })
})