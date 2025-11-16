// cypress/e2e/govServiceBranchesStatus.cy.js

import govServiceBranchesPage from './pages/govServiceBranches.page';

describe('Government Service Branches - Network Status Checks', () => {

  it('T1 - page HTML returns HTTP 200', () => {
    govServiceBranchesPage.interceptPageLoad();
    govServiceBranchesPage.visitPage();

    cy.wait('@serviceBranchesPage')
      .its('response.statusCode')
      .should('eq', 200);
  });

  //******************* 

  it('T2 - layers catalog API returns HTTP 200', () => {
    govServiceBranchesPage.interceptLayersCatalog();
    govServiceBranchesPage.visitPage();

    cy.wait('@layersCatalog')
      .its('response.statusCode')
      .should('eq', 200);
  });

  //******************* 

  it('T3 - professional data API (engineer-lior-swed) returns HTTP 200', () => {
    govServiceBranchesPage.interceptProfessionalData();
    govServiceBranchesPage.visitFirstOption();

    cy.wait('@professionalData')
      .its('response.statusCode')
      .should('eq', 200);
  });

});
