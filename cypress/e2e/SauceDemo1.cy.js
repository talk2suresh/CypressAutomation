require('cypress-xpath');


describe('SauceDemo Login Test', () => {
    it('should login using valid credentials', () => {
        // Visit the SauceDemo website
        cy.visit('https://www.saucedemo.com/');

        // Use XPath to locate and interact with elements
        cy.xpath('//input[@id="user-name"]').type('standard_user');
        cy.xpath('//input[@id="password"]').type('secret_sauce');
        cy.xpath('//input[@id="login-button"]').click();
        
    cy.xpath('(//button[contains(@id,"add-to-cart")])[position()=1]').click();
       
    });
});

