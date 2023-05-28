// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('validateButtonState', (buttonSelector) => { 
    cy.get(buttonSelector).then((button) => { 
        const isDisabled = button.prop('disabled'); 
        if (isDisabled) { 
            cy.wrap(button).should('be.disabled'); 
        } else { 
            cy.wrap(button).should('not.be.disabled').click({force:true}); 
        } 
    }); 
});


Cypress.Commands.add('validateElementVisibility', (elementSelector) => { 
    cy.get(elementSelector).then((element) => { 
        const isVisible = Cypress.dom.isVisible(element); 
        if (isVisible) { 
            cy.wrap(element).should('be.visible'); 
        } else { 
            cy.wrap(element).should('not.be.visible'); 
        } 
    }); 
});

Cypress.Commands.add('validateCSSProperty', (selector, property, expectedValue) => {
    cy.get(selector).should('have.css', property, expectedValue);
});

Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .then(cy.wrap)
})

// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
// const {iframe} = require('cypress-iframe');

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config);
//   on('before:browser:launch', (browser = {}, launchOptions) => {
//     if (browser.name === 'chrome') {
//       launchOptions.args.push('--disable-features=SameSiteByDefaultCookies');
//     }
//     return launchOptions;
//   });

//   iframe(on, config);
// };
require('cypress-downloadfile/lib/downloadFileCommand')
require('@cypress/xpath')
import "@cypress-audit/lighthouse/commands";


Cypress.Commands.add('swipeLeft', () => {
    cy.get('.swiper-slide-active')
      .trigger('mousedown', {position: "right"})
      .trigger('mousemove', {clientX: 100, clientY: 275})
      .trigger('mouseup', {force: true})
  })

  import { sqlQueryCommand } from 'cypress-multiple-db-sql-server';
              
  sqlQueryCommand();
