describe("query", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP",
      {
        fixture: "/sampleArticles.json",
      }
    ).as("articles");
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP",
      {
        fixture: "/altArticles.json",
      }
    ).as("altArticles");
    cy.visit("http://localhost:3000");
  });

  it("Should provide a query to select articles from", () => {
    cy.get("select").should("exist");
  });

  it("Should provide a different set of articles upon query selection", () => {
    cy.get(".article-card")
      .first()
      .find("h5")
      .should("contain", "Sign Up for the Science Times Newsletter");
    cy.get("select").select(1);
    cy.get(".article-card")
      .first()
      .find("h5")
      .should("contain", "Takeoff, of Atlanta Rap Trio Migos, Shot Dead at 28");
  });
});
