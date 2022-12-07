import Login from '../pageObjects/login.page'
import  { checkoutInfo } from '../data/checkoutInfo.data';

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
        return ('inventory.html');
    }

    get cartIcon() {
        return ('.shopping_cart_link');
    }

    get cartUrl() {
        return ('cart.html');
    }

    get cartPageHeader() {
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
        return ('#checkout');
    }

    get checkoutInfoUrl() {
        return ('checkout-step-one.html');
    }

    get checkoutInfoUrlTwo(){
        return ('checkout-step-two.html');
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

    checkout() {
        cy.get(this.btnCheckout).should('be.visible');
        cy.get(this.btnCheckout).click();
    }

    enterCheckoutInfo(firstname, lastname, zipCode) {
        //set first name
        cy.get(this.firstnameField).type(checkoutInfo.firstname);
        //set last name
        cy.get(this.lastnameField).type(checkoutInfo.lastname);
        //set zip code
        cy.get(this.zipCodeField).type(checkoutInfo.zipCode);
    }

    // checkoutInfoMissingFirstname(lastname, zipCode) {
    //     cy.get(this.lastnameField).type(lastname);
    //     cy.get(this.zipCodeField).type(zipCode);
    //     //click continue button
    //     cy.get(this.btnContinue).click();
    // }

    // checkoutInfoMissingLastname(firstname, zipCode) {
    //     cy.get(this.firstnameField).type(firstname);
    //     cy.get(this.zipCodeField).type(zipCode);
    //     //click continue button
    //     cy.get(this.btnContinue).click();
    // }
}
export default new CheckoutInfo()