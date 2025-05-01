require('cypress-xpath');


describe('Confirmation Alert Test', () => {
  it('Handles confirmation alert and asserts the text', () => {
    // Visit the target page
    cy.visit('https://testautomationpractice.blogspot.com/'); // Replace with the actual URL

    // Click the confirmation button using XPath
    cy.xpath("//button[@id='confirmBtn']").click();

    // Handle the confirmation alert
    cy.on('window:confirm', (alertText) => {
      // Assert the alert text
      expect(alertText).to.equal('Press a button!');
      return true; // Clicks the "OK" button
    });
  });
});