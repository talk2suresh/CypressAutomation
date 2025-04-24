require('cypress-xpath');
describe('Verifying Double Click', () => {
    it('should copy text on double click', () => {
        // Visit the URL
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        
        // Maximize the window
        cy.viewport('macbook-15');

        // Switch to iframe
        cy.xpath("//iframe[@id='iframeResult']").then(($iframe) => {
            const iframeBody = $iframe.contents().find('body');
            cy.wrap(iframeBody).as('iframe');
        });

        // Clear and type in the first input box
        cy.get('@iframe').xpath("//input[@id='field1']").clear().type('suresh');

        // Double-click the button
        cy.get('@iframe').xpath("//button[normalize-space()='Copy Text']").dblclick();

        // Verify the text in the second input box
        cy.get('@iframe').xpath("//input[@id='field2']").invoke('val').then((box2Text) => {
            expect(box2Text).to.equal('suresh');
        });
    });
});

