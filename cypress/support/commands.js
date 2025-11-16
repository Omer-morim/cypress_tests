Cypress.Commands.add('restoreGovVisitSession', () => {
  const cookies = [
    "_ssds", "_ssuzjsr0",
    "_uzma", "_uzmaj0", "_uzmbj0", "_uzmb", "_uzmc", "_uzmcj0", "_uzmd", "_uzmdj0", "_uzme",
    "_uzmf", "_uzmfj0", "_uzmi0",
    "__uzms",
    "_clsk", "_clck",
    "_pk_id", "_pk_ses"
  ];

  cookies.forEach(name => {
    const value = Cypress.env(name);
    if (value) {
      cy.setCookie(name, value, { domain: "govisit.gov.il" });
    }
  });
});
