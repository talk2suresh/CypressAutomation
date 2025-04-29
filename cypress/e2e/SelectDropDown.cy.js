describe('Select Germany from country dropdown using XPath', () => {

    before(() => {
      require('cypress-xpath');
    });
  
    it('should select Germany from the dropdown', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      // Step 1: Select Germany option directly
      cy.xpath('//select[@id="country"]').select('Germany');
  
      
    });
  
  });
  