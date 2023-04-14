describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/9akfya7")
  })

  it('should display error page when unknown url is passed', () => {
    cy.get('.error-container').should('exist')
  })

  it('should render correctly', () => {
    cy.get('.error-container').should('exist')
    cy.get('.oh-no').should('exist')
    cy.get('.home-link').should('exist')
    cy.get('.error-image').should('exist')
  })
 
  it('should take a user back to home when home link is clicked', () => {
    cy.get('.home-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})