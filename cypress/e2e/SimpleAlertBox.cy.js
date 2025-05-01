
require('cypress-xpath'); // Import cypress-xpath for XPath support
describe('Handle Simple Alert Box', () => {
  it('Clicks on alert button and handles the alert', () => {
    // Visit the application URL
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Click on the alert button using XPath
    cy.xpath("//button[@id='alertBtn']").click();

    // Handle the alert box
    cy.on('window:alert', (alertText) => {
      // Assert the alert text if needed
      expect(alertText).to.equal('I am an alert box!');
    });
  });
});