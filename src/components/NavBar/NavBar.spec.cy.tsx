import NavBar from ".";

describe("NavBar Cypress testing component", () => {
  it("should render", () => {
    cy.mount(<NavBar />);

    // Assertions
    cy.get("[data-cy=page-a-button]").should("be.visible");
    cy.get("[data-cy=page-b-button]").should("be.visible");
    cy.get("[data-cy=page-a-button]").should("have.text", "Page A");
    cy.get("[data-cy=page-b-button]").should("have.text", "Page B");
  });
});
