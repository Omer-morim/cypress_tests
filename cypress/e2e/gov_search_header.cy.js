import govSearch from './pages/govHeaderSearch.page';

describe('Header Search Component', () => {

  beforeEach(() => {
    govSearch.visitHome();
    govSearch.openSearch();
  });

  //******************** 

  it('T1 - search input is visible, enabled and can accept typing', () => {
    govSearch.getSearchInput()
      .should('be.visible')
      .and('be.enabled')
      

    govSearch.typeQuery('טסט');

    govSearch.getSearchInput()
      .should('have.value', 'טסט');
  });

    //******************** 

  it('T2 - placeholder text is correct in search input', () => {
  govSearch. getSearchText()
    .should('have.attr', 'placeholder', 'חפשו שירות או מידע');
});

  //******************** 

it('T3 - empty search shows default results list', () => {
  // 1. האינפוט גלוי, פעיל וריק לפני חיפוש
  govSearch.getSearchInput()
    .should('be.visible')
    .and('be.enabled')
    .and('have.value', '');


  govSearch.openSearch();

   govSearch.getDefaultResultsContainer()
    .should('be.visible');

    const expectedResults = [
      'דיווח על אירוע סייבר | מערך הסייבר הלאומי' ,
      'רשות המסים בישראל' ,     
      'קבלת קהל ועמדות שירות' ,
      'זימון תור להנפקת דרכונים ותעודות זהות (תיעוד ביומטרי) ברשות האוכלוסין וההגירה רשות האוכלוסין וההגירה' ,
      'חידוש רישיון רכב | משרד התחבורה והבטיחות בדרכים' ,
      'הגשת בקשה לקבלת תג חניה לנכה | משרד התחבורה והבטיחות בדרכים',
      'מידע על אישורי ניכוי מס במקור וניהול ספרים | רשות המסים בישראל',
      'עריכת תיאום מס באופן מקוון | רשות המסים בישראל',
      
    ];

 govSearch.getDefaultResultsLength()
  .should('have.length', expectedResults.length);

  govSearch.getDefaultResultsLength()
  .each(($el, index) => {
    cy.wrap($el).should('contain', expectedResults[index]);
  });

});

//*****************


 it('T4 - search valid query returns the expected result', () => {

  govSearch.typeQuery('רשות המסים בישראל');

  govSearch.getReshotMesimTitle()
    .its('length')
    .should('be.gte', 1);

  govSearch.getReshotMesimTitle()
    .first()
    .should('contain','רשות המסים בישראל');

  //same test on diffrent keyboard word
  govSearch.visitHome();
  govSearch.openSearch();

  govSearch.typeQuery('קבלת קהל ועמדות שירות');

  govSearch.getReshotMesimTitle()
    .its('length')
    .should('be.gte', 1);

  govSearch.getReshotMesimTitle()
    .first()
    .should('contain', 'קבלת קהל ועמדות שירות');

  
});


//*****************

it('T5 - invalid query shows no-results message', () => {

  
  govSearch.typeQuery('gdfgdfgdfgdfhdfghdgfhfg');

  govSearch.openSearch_2();


  govSearch.getNoResultsInSearch()
    .should('contain', 'לא נמצאו');

  
  govSearch.getDefaultResultsLength()
    .should('have.length', 0);
});

//****************************** 

it(' T6 - Search via Enter key submits the query', () => {
  // {enter} 
  govSearch.typeQuery('רשות המסים בישראל{enter}');

  govSearch.getDiractResult()
  .should('be.visible')
  .and('contain', 'רשות המסים בישראל');

 
});

//****************************** 






});
