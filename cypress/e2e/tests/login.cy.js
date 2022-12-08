import Login from '../pageObjects/login.page';
import usersData from '../data/users.data';

describe('The user', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should be able to login', () => {

        Login.login(usersData.validUser.username, usersData.validUser.password);
        cy.url().should('contain', 'inventory');
    });

    it('should not login with lockOutUser credentials', () => {

        Login.login(usersData.lockedOutUser.username, usersData.lockedOutUser.password);
        cy.get(Login.invalidLoginErrorMessage).should('have.text', usersData.lockedOutUser.errorMsg);
    });
});