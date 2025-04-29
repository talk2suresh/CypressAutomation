describe('Drag and Drop using XPath on testautomationpractice', () => {

    before(() => {
      // Load cypress-xpath
      require('cypress-xpath');
    });
  
    // Custom command to drag using XPath
    Cypress.Commands.add('dragAndDropXpath', (sourceXpath, targetXpath) => {
      cy.xpath(sourceXpath)
        .trigger('mousedown', { which: 1, force: true });
  
      cy.xpath(targetXpath)
        .trigger('mousemove', { force: true })
        .trigger('mouseup', { force: true });
    });
  
    it('should drag source to target using XPath only', () => {
      cy.visit('https://testautomationpractice.blogspot.com/');
  
      cy.dragAndDropXpath(
        "//div[@id='draggable']/p[text()='Drag me to my target']",
        "//div[@id='droppable']/p[text()='Drop here']"
      );
  
      
    });
  });
  