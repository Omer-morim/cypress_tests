// cypress/e2e/pages/govAuthorityServices.page.js

class GovAuthorityServicesPage {
  visitAuthorityPage() {
    cy.visit('https://govisit.gov.il/he/authorities/authority/262');
  }

  interceptServices() {
    cy.intercept(
      'GET',
      '**/API/ServicesAPI/api/Authority/getAuthoritiyCategoriesBySequenece/*'
    ).as('services');
  }

  
  waitForServicesLoaded() {
    cy.wait('@services');
    cy.get('div.service').should('have.length.greaterThan', 0);
  }


  getAllServices() {
    return cy.get('div.service');
  }

  getServicesWithAppointment() {
    return cy
      .get('div.service')
      .filter(
        ':has(a[href*="appointment"]), :has(button[aria-label*="זימון תור"]), :has(button:contains("זימון תור"))'
      );
  }

 
  clickAppointmentOnIndex(index) {
    this.getServicesWithAppointment()
      .eq(index)
      .within(() => {
        cy.get('a[href*="appointment"], button')
          .first()
          .scrollIntoView()
          .click({ force: true }); 
      });
  }
}

export default new GovAuthorityServicesPage();
