describe('Stories Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=BbLtA2ebhIHX1hgePOP0CJGLPAV0CkhL", {fixture: "stories"})
    cy.visit('http://localhost:3000/')
    cy.get("[data-cy='Food']").click()
  })

  it('should open the quiz page and verify the url', () => {
    cy.url().should('eq', 'http://localhost:3000/category/Food')
  })

  it('should render header without error', () => {
    cy.get('.category-page-container').should('exist')
    cy.get('.header-container').should('exist')
    cy.get('.header-text-container').should('exist')
    cy.get('.whats-the-scoop').should('exist')
    cy.get('.todays-news').should('exist')
    cy.get('.logo-container').should('exist')
    cy.get('.logo-container-2').should('exist')
  })

  it('should display a card for each article in that topic', () => {
    cy.get('.category-page-container').children().should("have.length", 5)
  })

  it('should render the card correctly', () => {
    cy.get('.article-card-link').should('exist')
    cy.get('.story-title').should('exist')
    cy.get('.byline').should('exist')
    cy.get('.abstract-container').should('exist')
  })

  // it('should take the user to NYT story page when clicked', () => {
  //   cy.get("[data-cy='1']").click()
  //   cy.url().should('eq', "https://www.nytimes.com/2023/04/11/dining/restaurant-review-marcus-samuelsson-hav-and-mar.html")
  // })
})