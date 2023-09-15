/// <reference types="Cypress" />

describe('Kyowa Kirin Hub Website Test', () => {
    it('should register a new user', () => {

        cy.clearCookies();
        // Visit the website you want to test
        cy.visit('https://www.kyowakirinhub.com/en-gb/');

        // Click on the "Login/Register" link on the header
        cy.get('a.UserStatus_CTA[href="/en-gb/login"]').click();

        // Find the registration tab and click on it
        cy.get('.tab-form-component.tab-form-component--new-fields')
          .find('button[type="button"].form-tab.custom-focus-forced.form-tab-active')
          .contains('Register')
          .click({ timeout: 15000 });  // Increase the timeout value

        // Fill in the registration form
        cy.get('input#salutation').type('Doctor');
        cy.get('input#first-name').type('Noor');
        cy.get('input#last-name').type('Gurib');
        cy.get('input#email').type('noorgurib@gmail.com');
        cy.get('input#new-password').type('Testing123+');
        cy.get('select#role').select('Hospital Doctor');
        cy.get('select#speciality').select('ENT');
        cy.get('input#jobtitle').type('doctor');
        cy.get('input#organization-title').type('Mauritius');
        cy.get('input#department').type('Specialist');
        cy.get('input#departmentPhone').type('12345678');
        cy.get('input#phone').type('12345');

        // Agree to terms
        cy.get('.radio-button-wrap label[for="consent1"]').click();

        // Disagree to marketing preferences
        cy.get('.radio-button-wrap label[for="consent2"]').click();

        // Click on the "CREATE YOUR ACCOUNT" button
        cy.get('button[type="submit"].custom-focus.ie-11-button-fix.btn_event_register')
          .contains('CREATE YOUR ACCOUNT')
          .click({ timeout: 15000 });  // Increase the timeout value

        // Add assertions as needed
        // For example, you can assert that the user is redirected to a specific page after registration.
        // For now, we'll just check if the page title contains "Kyowa Kirin Hub"
        cy.title().should('include', 'Kyowa Kirin Hub', { timeout: 15000 });  // Increase the timeout value
    });
});
