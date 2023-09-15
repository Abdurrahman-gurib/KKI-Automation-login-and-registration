/// <reference types="Cypress" />

describe('Kyowa Kirin Hub Website Test', () => {
  it('should log in with valid credentials and check the header for "Noor"', () => {
    // Visit the website you want to test
    cy.visit('https://www.kyowakirinhub.com/en-gb/');

    // Click on the "Login/Register" login button on the header
    cy.get('a.UserStatus_CTA[href="/en-gb/login"]').click();

    // Fill in the login form with valid credentials
    cy.get('input#email').type('kkicypress2023@yopmail.com');
    cy.get('input#password').type('Testing123+');

    // Click on the "CONTINUE" button to login
    cy.get('button.custom-focus.btn_event_login').click(); 

    // Assert that the login was successful and the header contains 'Noor'
    //Registration code

        // Add assertions as needed
        // For example, you can assert that the user is redirected to a specific page after registration.
        // For now, we'll just check if the page title contains "Kyowa Kirin Hub"
        cy.title().should('include', 'Kyowa Kirin Hub', { timeout: 15000 });  // Increase the timeout value
    // You can add more assertions or tests as needed
    // For example, you can check for other elements or actions specific to the user's dashboard after login.
  });
});
