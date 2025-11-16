// cypress/e2e/pages/govServiceBranches.page.js

class GovServiceBranchesPage {
  
  visitPage() {
    cy.visit('https://www.gov.il/he/government-service-branches');
  }

  interceptPageLoad() {
    cy.intercept(
      'GET',
      '**/he/government-service-branches*'
    ).as('serviceBranchesPage');
  }

  interceptLayersCatalog() {
    cy.intercept(
      'GET',
      '**/api/layers-catalog/catalog*'
    ).as('layersCatalog');
  }


  visitFirstOption() {
  cy.visit('https://www.gov.il/he/government-service-branches/engineer-lior-swed');
}

  
  
interceptProfessionalData() {
  cy.intercept(
    'GET',
    '**/govilHF/api/GetHeaderMoreData*'
  ).as('professionalData');
}
}

export default new GovServiceBranchesPage();
