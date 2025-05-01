
require('cypress-xpath'); // Import cypress-xpath for XPath support
describe('Handle Prompt Alert', () => {
  it('Clicks on prompt alert button and enters text', () => {
    // Visit the application URL
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Click on the prompt alert button using XPath
    cy.xpath("//button[@id='promptBtn']").click();

    // Handle the alert
    cy.on('window:prompt', (str) => {
      // Assert the default text in the prompt (if needed)
      expect(str).to.equal('Please enter your name:');

      // Return the text to be entered in the prompt
      return 'Suresh';
    });

    
  });
});