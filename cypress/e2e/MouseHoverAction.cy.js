require('cypress-xpath');

describe('Verifying Mouse Hover', () => {
    it('should perform mouse hover and click using Cypress', () => {
        // Ignore uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Masonry is not defined') || 
                err.message.includes('popover is not a function') || 
                err.message.includes('oldInputs is not defined')) {
                return false; // Prevent Cypress from failing the test
            }
        });
        // Visit the website
        cy.visit('https://www.orangehrm.com/');
        cy.viewport(1280, 720); // Maximize the window

        // Use XPath to locate elements
        cy.xpath("//a[text()='Resources']").trigger('mouseover'); // Hover over 'Resources'
        cy.xpath("(//a[text()='eBooks'])[1]").click({ force: true }); // Click on 'eBooks' with force

        // Assertions can be added here if needed
    });
});

