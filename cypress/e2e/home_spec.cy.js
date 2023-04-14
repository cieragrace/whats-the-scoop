  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/")
    })
    it('should render header without error', () => {
      cy.get('.home-container').should('exist')
      cy.get('.header-container').should('exist')
      cy.get('.header-text-container').should('exist')
      cy.get('.whats-the-scoop').should('exist')
      cy.get('.todays-news').should('exist')
      cy.get('.logo-container').should('exist')
      cy.get('.logo-container-2').should('exist')
    })

    it('should render a category card per possible category', () => {
      cy.get('.grid-container').should('exist')
      cy.get('.grid-container').children().should("have.length", 26)
      cy.get('.cat-card-link').should('exist')
    })

    it('should update url based on category', () => {
      cy.get("[data-cy='Food']").click()
      cy.url().should('eq', 'http://localhost:3000/category/Food')
    })
  })