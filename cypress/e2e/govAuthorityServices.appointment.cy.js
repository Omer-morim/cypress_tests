// cypress/e2e/govAuthorityServices.appointment.cy.js
import govAuthorityServicesPage from './pages/govAuthorityServices.page';

describe('T3 – services with appointment navigate to appointment URL', () => {

  beforeEach(() => {
    cy.session('govisit-session', () => {
      cy.restoreGovVisitSession();
    });

    govAuthorityServicesPage.interceptServices();       
    govAuthorityServicesPage.visitAuthorityPage();
    govAuthorityServicesPage.waitForServicesLoaded();
  });

  it("loops services with appointment, clicks each, and checks URL contains 'appointment'", () => {

    govAuthorityServicesPage
      .getServicesWithAppointment()
      .should('have.length.greaterThan', 0)
      .then($services => {
        const total = $services.length;
        cy.log(`Services with appointment: ${total}`);

        const clickByIndex = (index) => {
          if (index >= total) {
            cy.log('Finished clicking all services with appointment');
            return;
          }

          cy.log(`Clicking service index ${index}`);


          govAuthorityServicesPage.clickAppointmentOnIndex(index);

          cy.url().should('include', 'appointment');

          cy.go('back');

         
          cy.wait('@services');
          govAuthorityServicesPage.waitForServicesLoaded();

          govAuthorityServicesPage
            .getServicesWithAppointment()
            .should('have.length.greaterThan', 0)
            .then(() => clickByIndex(index + 1));
        };

        clickByIndex(0);
      });
  });
});
