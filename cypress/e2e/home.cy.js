describe("home page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP",
      {
        fixture: "/sampleArticles.json",
      }
    ).as("articles");
    cy.visit("http://localhost:3000");
  });

  it("Should have a descriptive header", () => {
    cy.get("h1").should("contain", "Times Reader (science)");
  });

  it("Should have a search bar", () => {
    cy.get('input[type="text"]').should("exist");
  });

  it("Should have a dropdown menu of categories", () => {
    cy.get("select").should("exist");
  });
  it("Should render a few top stories", () => {
    cy.get(".article-card").should("have.length", 3);
  });

  it("Each article card should have an image and title", () => {
    cy.get(".article-card")
      .first()
      .find("h5")
      .should("contain", "Sign Up for the Science Times Newsletter");
    cy.get(".article-card")
      .first()
      .find("img")
      .should("have.attr", "alt")
      .and("equal", "Sign Up for the Science Times Newsletter");
  });
});
