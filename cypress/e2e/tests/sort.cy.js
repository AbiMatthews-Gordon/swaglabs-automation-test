import { loginData } from '../data/login.data';
import Login from '../pageObjects/login.page'

describe('Filter', () => {
    beforeEach(() => {
        cy.visit('/')

        Login.login(loginData.username, loginData.password);
      });

    it('should sort product list from A-Z', () => {

        cy.get('.product_sort_container').select('az');

        var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort();

        cy.get('.inventory_item_name').each(($elem, index) => {

            expect($elem.text()).equal(productList[index]);
        })
    });

    it('should sort product list from Z-A', () => {
        
        cy.get('.product_sort_container').select('za');

        var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
        productList.sort().reverse();

        cy.get('.inventory_item_name').each(($elem, index) => {

            expect($elem.text()).equal(productList[index]);
        })
    });
})