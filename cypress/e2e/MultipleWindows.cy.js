require('cypress-xpath');

describe('Wikipedia Search Automation', () => {
    it('Searches Selenium and interacts with results', () => {
      // Visit the website
      cy.visit('https://testautomationpractice.blogspot.com/');
      cy.viewport(1280, 720); // Maximizing the browser size
  
      // Type "selenium" into the search box
      cy.get('input.wikipedia-search-input').type('selenium');
  
      // Click the search button
      cy.get('input[type="submit"]').click();
  
      // Wait for the search results to load
      cy.get('#wikipedia-search-result-link > a').should('have.length.greaterThan', 0);
  
      // Log number of search results
      cy.get('#wikipedia-search-result-link > a').then((links) => {
        cy.log(`Number of search results: ${links.length}`);
  
        // Open links in the same tab using invoke (Cypress doesn't allow multi-tab handling)
        cy.wrap(links).each((link) => {
          const href = link.prop('href');
          if (href.includes('Selenium_in_biology') || href.includes('Selenium_disulfide')) {
            cy.visit(href);
            cy.title().then((title) => {
              cy.log(`Title: ${title}`);
              // Simulate closing tab by going back
              cy.go('back');
            });
          }
        });
      });
    });
  });
  