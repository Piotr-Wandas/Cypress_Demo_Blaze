/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Deno Blaze', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('should provide an ability to register', () => {
        const { username, password } = generateUser();

        cy.get('#signin2').click();

        cy.get('#sign-username').type(username, { force: true }).should('have.value', username);
        cy.get('#sign-password').type(password, { force: true }).should('have.value', password);

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });
    });

    it('should provide an ability to log in', () => {
        const { username, password } = generateUser();

        cy.get('#signin2').click();

        cy.get('#sign-username').type(username, { force: true }).should('have.value', username);
        cy.get('#sign-password').type(password, { force: true }).should('have.value', password);

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });

        cy.get('#login2').click();
        cy.get('#loginusername').type(username, { force: true }).should('have.value', username);
        cy.get('#loginpassword').type(password, { force: true }).should('have.value', password);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        cy.get('#nameofuser').should('contain', username);
    });

    it('should provide an ability to add product to the cart', () => {
        const { username, password } = generateUser();

        cy.get('#signin2').click();

        cy.get('#sign-username').type(username, { force: true }).should('have.value', username);
        cy.get('#sign-password').type(password, { force: true }).should('have.value', password);

        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });

        cy.get('#login2').click();
        cy.get('#loginusername').type(username, { force: true }).should('have.value', username);
        cy.get('#loginpassword').type(password, { force: true }).should('have.value', password);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        cy.get(':nth-child(1) > .card > .card-block > .card-title').contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click();

        // cy.on('window:alert', (str) => {
        //     expect(str).to.equal('Product added.');
        // });

        cy.get('#cartur').click();
        cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6');
    });
});
