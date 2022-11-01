describe("detailed view", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jEnxtMxPoFUzWywbiJSS5nHch0AOHqlP",
      {
        fixture: "/sampleArticles.json",
      }
    ).as("articles");
    cy.visit("http://localhost:3000");
    cy.get(".article-card").first().click();
  });

  it("Should have a specific URL", () => {
    cy.url().should("be.equal", "http://localhost:3000/article/0");
  });

  it("Should render details for selected articles", () => {
    cy.get("img")
      .should("have.attr", "alt")
      .and("equal", "NASA, via Associated Press");
    cy.get(".detail-title").should(
      "contain",
      "Sign Up for the Science Times Newsletter"
    );
    cy.get(".abstract").should(
      "contain",
      "Every week, we’ll bring you stories that capture the wonders of the human body, nature and the cosmos."
    );
    cy.get(".dates").should("contain", "Created: Fri Feb 05 2016");
  });

  it("Should have a link to the full article", () => {
    cy.get("a")
      .last()
      .should("have.attr", "href")
      .and("equal", "https://portfolio-jrmedina.vercel.app/");
  });

  it("Should have a way to go back to the homepage", () => {
    cy.url().should("be.equal", "http://localhost:3000/article/0");
    cy.get("a").first().click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
