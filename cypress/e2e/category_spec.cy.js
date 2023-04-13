describe('Stories Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.contains("Food").click()
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=BbLtA2ebhIHX1hgePOP0CJGLPAV0CkhL", {fixture: "stories"})
    cy.visit("http://localhost:3000/category/Food")
  })

  it('should open the quiz page and verify the url', () => {
    cy.url().should('eq', 'http://localhost:3000/category/Food')
  })
})