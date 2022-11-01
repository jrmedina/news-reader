describe("search", () => {
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

  it("Should not allow user to search without input", () => {
    cy.get('input[type="text"]').should("have.value", "");
    cy.get("button").should("have.disabled");
  });

  it("Should enable button after input is recieved", () => {
    cy.get('input[type="text"]').type("states");
    cy.get("button").should("have.enabled");
  });

  it("Should show results for search", () => {
    cy.get('input[type="text"]').type("states");
    cy.get("button").click();
    cy.get("h3").should("contain", `Search results for: "states"`);
    cy.get(".title").should("contain", "States");
  });

  it("Should let the user know if there are no matching results and provide a way back to the homepage", () => {
    cy.get('input[type="text"]').type("blahblah");
    cy.get("button").click();
    cy.get("p").should("contain", "Let's try again...");
    cy.get("button").click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
