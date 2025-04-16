require('cypress-xpath');

describe('Verify Alerts', () => {
    it('Handling normal alert with OK button', () => {
        // Visit the URL
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.xpath("//button[text()='Click for JS Alert']").click();

        // Handle the alert
        cy.on('window:alert', (alertMessage) => {
            // Assertion
            expect(alertMessage).to.equal('I am a JS Alert');
        });

        // Automatically accepts the alert
    });
});