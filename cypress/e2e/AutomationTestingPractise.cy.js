/// <reference types="cypress" />
require('cypress-xpath');
require('@4tw/cypress-drag-drop');


describe('Drag and Drop Test', () => {
    it('should drag the source element and drop it on the target element', () => {
        // Visit the website
        cy.visit('https://testautomationpractice.blogspot.com/');

        // Perform drag and drop using the plugin
        cy.xpath("//div[@id='draggable']").drag("//div[@id='droppable']");

        
    });
});