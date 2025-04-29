describe('Radio button selection using XPath only', () => {

    before(() => {
      require('cypress-xpath');
    });
  
    it('should check and select Male radio button if not already selected', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      const maleRadioXPath = "//label[text()='Male']/preceding-sibling::input[@id='male']";
  
      // Step 1: Check if already selected
      cy.xpath(maleRadioXPath).then($radio => {
        if (!$radio.is(':checked')) {
          // Step 2: Click to select
          cy.xpath(maleRadioXPath).click({ force: true });
        }
      });
  
      // Step 3: Confirm it's selected
      cy.xpath(maleRadioXPath).should('be.checked');
    });
  
  });
  