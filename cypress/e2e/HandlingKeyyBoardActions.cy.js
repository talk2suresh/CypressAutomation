require('cypress-xpath');

describe('Verifying Keyboard Action Keys', () => {
    it('should perform keyboard actions using Cypress', () => {
        // Visit the website
        cy.visit('https://text-compare.com/');
        cy.viewport(1280, 720);

        // Type text into the first textbox
        cy.xpath("//textarea[@id='inputText1']").type('suresh siripurapu');

        // Select all text (Ctrl+A)
        cy.xpath("//textarea[@id='inputText1']").type('{ctrl}a');

        // Copy the text (Ctrl+C)
        cy.xpath("//textarea[@id='inputText1']").type('{ctrl}c');

        // Move to the second textbox by directly focusing on it
        cy.xpath("//textarea[@id='inputText2']").click();

        // Paste the text into the second textbox (Ctrl+V)
        cy.xpath("//textarea[@id='inputText2']").type('{ctrl}v');
    });
});

