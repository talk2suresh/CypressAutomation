require('cypress-xpath');
describe('Handle Calendar Test', () => {
    const year = "2025";
    const month = "August";
    const date = "25";

    it('select ddMMYY', () => {
        cy.visit('https://www.makemytrip.com/', { timeout: 60000 }); // Increase timeout to 60 seconds
        cy.viewport(1280, 720);

        // Close the modal
        cy.xpath("//span[@data-cy='closeModal']").click();

        // Click on Departure
        cy.xpath("//span[text()='Departure']").click();

        // Navigate to the correct year
        cy.xpath("//span[@aria-label='Next Month']").then(nextMonth => {
            function selectYear() {
                cy.xpath("//div[@class='DayPicker-Caption']/div[contains(text(),'" + year + "')]").then(yearElement => {
                    if (yearElement.length === 0) {
                        cy.wrap(nextMonth).click();
                        selectYear();
                    }
                });
            }
            selectYear();
        });

        // Navigate to the correct month
        cy.xpath("//span[@aria-label='Next Month']").then(nextMonth => {
            function selectMonth() {
                cy.xpath("//div[@class='DayPicker-Caption']/div[contains(text(),'" + month + "')]").then(monthElement => {
                    if (monthElement.length === 0) {
                        cy.wrap(nextMonth).click();
                        selectMonth();
                    }
                });
            }
            selectMonth();
        });

        // Select the date
        const dateXpath = "//div[@class='DayPicker-Caption']/div[contains(text(),'" + month + "')]/../following-sibling::div[@class='DayPicker-Body']/descendant::p[text()='" + date + "']";
        cy.xpath(dateXpath).then(dateElement => {
            cy.wrap(dateElement).click({ force: true });
        });

        // Verify the selected date
        cy.xpath("//p[@data-cy='departureDate']/span[text()]").then(fullDate => {
            const dateInfo = [];
            fullDate.each((index, element) => {
                dateInfo.push(Cypress.$(element).text());
            });
            cy.log(dateInfo);
        });
    });
});