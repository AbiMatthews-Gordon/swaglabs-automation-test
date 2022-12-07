import { loginData } from '../data/login.data';
import addToCartPage from '../pageObjects/addToCart.page'
import Login from '../pageObjects/login.page';
import { addSingleItemToCartTest } from './addToCart.cy';
import { products } from '../data/product.data';


describe('The User', () => {
    beforeEach(() => {
        cy.visit('/');

        Login.login(loginData.username, loginData.password);
    })

    it('should be able to remove an item from cart', () => {

        //add item to page
        addSingleItemToCartTest();

        // Navigate to the cart
        cy.get(addToCartPage.cartBadge).click();

        // Assert that there is 1 item in the cart then remove the item
        cy.get(addToCartPage.cartQuantity).should('have.text', 1);
        cy.get(addToCartPage.cartItemsName).should('have.text', 'Sauce Labs Backpack');

        //click remove button
        cy.get(addToCartPage.btnRemove).click();

        // Assert that the item was removed and the cart is empty
        cy.get(addToCartPage.cartItemsName).should('not.exist');
        cy.get(addToCartPage.removedCartItem).should('exist');
    });

    it('should remove an item from the product list', () => {

        //add item to page
        addToCartPage.addToCart(products[0].name);

        //check that the button change to remove
        cy.get(`#remove-${addToCartPage.applySelectorFormat(products[0].name)}`).should('exist');

        //remove the item from cart
        addToCartPage.removeFromCart(products[0].name);

        //check that item has been removed
        cy.get(`#remove-${addToCartPage.applySelectorFormat(products[0].name)}`).should('not.exist');
    });
})