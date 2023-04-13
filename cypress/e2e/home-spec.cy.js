  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('should render without error', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('.home-container').should('exist')
      cy.get('.header-container').should('exist')
      cy.get('.cat-card-link').should('exist')
    })
  })