describe('Testing link in KyowaKirin Hub', () => {
    beforeEach(function () {
      cy.fixture('kkiuk').as("loginhubUser")
    })
  
    it('Visit Kyowakirin Hub', () => {
      cy.clearCookies();
      cy.visit("https://uat.kyowakirinhub.com/en-gb", {
        auth: {
            username: 'preview',
            password: 'SJvbmEHe!p4C',
          },
      }, { timeout: 10000 });
  
      cy.xpath('//div[contains(@class,"cookie-banner__controls-primary")]//button[1]', { timeout: 10000 }).click();
      cy.get('.UserStatus_CTA > span', { timeout: 10000 }).first().click();
      cy.log("Login user");
      cy.get('#email').type("kkicypress2023@yopmail.com");
      cy.get('#password').type("Testing*");
      cy.get('.form-field-button > .custom-focus', { timeout: 10000 }).click();
      cy.get(':nth-child(1) > .hasChild').click({force: true, timeout:10000});
      cy.get('.SubNavigation1 > :nth-child(1) > a').click({force: true, timeout:10000});
      cy.intercept(
        {
          method: 'GET',
          url: 'https://content-eu-1.content-cms.com/api/a590dc33-59b3-4b9b-b542-612ac16a7b39/delivery/v1/rendering/context/b8c2dcd4-cc6d-4ea8-8dca-f15d9eb892b9',
        }
      ).then(() => {
        cy.get(':nth-child(1) > .chevron-button-component > .chevron-button-text').click();
        cy.log("Button Clicked");
      });
  
      cy.log("Visit link 2");
  
      cy.get('@loginhubUser').then((loginUser) => {
        cy.visit(loginUser.url,{
          auth: {
              username: 'preview',
              password: 'SJvbmEHe!p4C',
          },
        },
        {failOnStatusCode: false}).then(() =>{
          cy.intercept(
            {
              method: 'GET',
              url: 'https://content-eu-1.content-cms.com/api/a590dc33-59b3-4b9b-b542-612ac16a7b39/delivery/v1/rendering/context/b8c2dcd4-cc6d-4ea8-8dca-f15d9eb892b9',
            }
          );
        });
      })
    })
  })
  