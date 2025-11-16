// cypress/e2e/pages/govHeaderSearch.page.js

class GovHeaderSearchPage {
  visitHome() {
    cy.visit('/');
  }

  // Locators
  getSearchClickInput() {
    return cy.get('#hp-main-search .position-relative'); 
    
  }

   getSearchClickSearchButton() {
    return cy.get('#btnSearch'); 
  }

  getSearchResults() {
    return cy.get('.results .result-item')
  }

  getSearchText(){
    return cy.get('input[placeholder="חפשו שירות או מידע"]')
  }
 
    getDefaultResultsContainer() {
    return cy.get('#searchSuggestions');
  }

  getNoResultsInSearch() {
    return cy.get('.resultCounter span:nth-of-type(3)');
  }

  getDiractResult() {
    return cy.get('.resultCounter')
  }


    getDefaultResultsLength() {
    return cy.get('.maybe-Interested_Link_wrap__FQSn2');
  }

  getReshotMesimTitle() {
    return cy.get('.search-results_suggestion_info__e6x7K .search-results_sug_title__eXmTJ')
  }

  getSearchInput() {
    return cy.get('#SearchInput');
  }

  // Actions 
  openSearch() {
    this.getSearchClickInput().click();
  }

  openSearch_2() {
    this.getSearchClickSearchButton().click();
  }


  typeQuery(text) {
    this.getSearchInput().clear().type(text);
  }
}

export default new GovHeaderSearchPage();
