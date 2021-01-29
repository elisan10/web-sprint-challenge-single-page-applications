describe("Lambda Eats App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza/");
  });

  const nameInput = () => cy.get('input[name="name"]');
  //   const toppingsCheck = () => cy.get("#pizza-toppings");
  const pepperoniCheck = () => cy.get('input[name="pepperoni"]');
  const sausageCheck = () => cy.get('input[name="sausage"]');
  const jalapenoCheck = () => cy.get('input[name="jalapeno"]');
  const pineappleCheck = () => cy.get('input[name="pineapple"]');
  const submitButton = () => cy.get("#add-button");

  it("test that you can add text to the box", () => {
    nameInput()
      .should("have.value", "")
      .type("Elizabeth")
      .should("have.value", "Elizabeth");
  });

  it("test that you can select multiple toppings", () => {
    pepperoniCheck().check();
    sausageCheck().check();
    jalapenoCheck().check();
    pineappleCheck().check();
    // toppingsCheck().check();
  });

  it("test that you can submit the form", () => {
    cy.contains("Elizabeth").should("not.exist");
    nameInput().type("Elizabeth");
    // pepperoniCheck().check();
    // sausageCheck().check();
    // jalapenoCheck().check();
    // pineappleCheck().check();
    submitButton().check();
    cy.contains("Elizabeth").should("exist");
  });
});
