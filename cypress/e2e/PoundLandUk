require('cypress-xpath');

describe('PoundLand UK Automation', () => {
    it('Accept Cookies and Search for Chocolate', () => {
        // Visit the website
        cy.visit('https://www.poundland.co.uk/');

        // Click on "Accept All Cookies" button using XPath
        cy.xpath('//button[@aria-label="Accept All Cookies"]').click();

        // Click on the search bar and type "chocolate"
        cy.xpath('//input[@id="search"]').click().type('chocolate');
    });
});

