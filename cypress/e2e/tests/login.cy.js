import Login from '../pageObjects/login.page'

describe('Authentication', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('user should be able to login', () => {

        Login.login('standard_user','secret_sauce');
        cy.url().should('contain', 'inventory');
    });

});