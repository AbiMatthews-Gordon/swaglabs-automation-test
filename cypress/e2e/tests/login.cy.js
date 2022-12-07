import Login from '../pageObjects/login.page';
import { invalidLogin, loginData } from '../data/login.data';
import loginPage from '../pageObjects/login.page';

describe('The user', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('should be able to login', () => {

        Login.login(loginData.username, loginData.password);
        cy.url().should('contain', 'inventory');
    });

    it('should not login with invalid credentials', () => {

        Login.login(invalidLogin.username,invalidLogin.password);
        cy.get(loginPage.invalidLoginErrorMessage).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

});