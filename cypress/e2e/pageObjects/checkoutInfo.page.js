import Login from '../pageObjects/login.page'
import { checkoutInfo } from '../data/checkoutInfo.data';

class CheckoutInfo {


    get usernameField() {
        return ('#user-name');
    }

    get passwordField() {
        return ('#password');
    }

    get btnLogin() {
        return ('#login-button');
    }

    get inventoryUrl() {
        return ('https://www.saucedemo.com/inventory.html');
    }

    get cartIcon() {
        return ('.shopping_cart_link');
    }

    get cartUrl() {
        return ('https://www.saucedemo.com/cart.html');
    }

    get cartPageTitle() {
        return ('.title');
    }

    get cartQuantity() {
        return ('.cart_quantity');
    }

    get itemName() {
        return ('.inventory_item_name');
    }

    get itemPrice() {
        return ('.inventory_item_price');
    }

    get btnCheckout() {
        return ('checkout');
    }

    get checkoutInfoUrl() {
        return ('https://www.saucedemo.com/checkout-step-one.html');
    }

    get checkoutPageTitle() {
        return ('.title');
    }

    get firstnameField() {
        return ('#first-name');
    }

    get lastnameField() {
        return ('#last-name');
    }

    get zipCodeField() {
        return ('#postal-code');
    }

    get btnContinue() {
        return ('#continue');
    }

    checkoutInfo() {

        // login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // add item to cart
        cy.get('#add-to-cart-sauce-labs-backpack').click();

        //click cart icon
        cy.get(this.cartIcon).click();

        //click checkout button 
        cy.get(this.btnCheckout).click();

        //fill out fields
        cy.get(this.firstnameField).type('Jane');
        cy.get(this.lastnameField).type('Doe');
        cy.get(this.zipCodeField).type('00000');

        //click continue button
        cy.get(this.btnContinue).click();

    }
}
export default new CheckoutInfo()