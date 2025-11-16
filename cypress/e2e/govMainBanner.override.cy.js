// cypress/e2e/govMainBanner.override.cy.js

const PMO_API_PATTERN =
  '**/govil-landing-page-api/he/api/offices/get/prime_ministers_office*';

describe('T4 - override PMO mainBanner with MOPS mainBanner', () => {
  it('visits PMO page and replaces mainBanner with mainBanner from MOPS page', () => {
  
    cy.fixture('mops-mainBanner.json').then((mopsData) => {
      const mopsMainBanner = mopsData.mainBanner;

     
      expect(mopsMainBanner, 'mopsData.mainBanner from fixture').to.exist;

      
      cy.intercept('GET', PMO_API_PATTERN, (req) => {
        req.reply((res) => {
          const body = res.body || {};

          
          if (body.responseData && body.responseData.mainBanner) {
            body.responseData.mainBanner = mopsMainBanner;
            console.log(' mainBanner replaced under responseData.mainBanner');
          } else {
            
            body.mainBanner = mopsMainBanner;
            console.log(' mainBanner replaced under body.mainBanner');
          }

          return {
            ...res,
            body,
          };
        });
      }).as('pmoLanding');

      
      cy.visit(
        'https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page'
      );

      
      cy.wait('@pmoLanding').then(({ response }) => {
        const body = response.body || {};

        console.log(' PMO body after override:', body);

        
        const pmoMainBanner =
          body.responseData?.mainBanner ?? body.mainBanner;

        console.log(' PMO mainBanner after override:', pmoMainBanner);

        expect(pmoMainBanner, 'PMO mainBanner after override').to.deep.equal(
          mopsMainBanner
        );
      });
    });
  });
});
