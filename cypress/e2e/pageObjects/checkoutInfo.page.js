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

    get firstnameRequiredError(){
        return ('#first-name + svg');
    }

    get firstnameErrorMessage(){
        return ('h3[data-test=error]');
    }

    get lastnameField() {
        return ('#last-name');
    }

    get lastnameRequiredError(){
        return ('#last-name + svg');
    }

    get lastnameErrorMessage(){
        return ('h3[data-test=error]');
    }

    get zipCodeField() {
        return ('#postal-code');
    }

    get postalRequiredError(){
        return ('#postal-code + svg');
    }

    get postalErrorMessage(){
        return ('h3[data-test=error]');
    }

    get btnContinue() {
        return ('#continue');
    }

    get checkoutInfoPageHeader(){
        return 'Checkout: Your Information';
    }

    get firstnameErrorMessageText(){
        return 'Error: First Name is required';
    }

    get cartHeaderText(){
        return 'Checkout: Your Information';
    }

    get lastnameErrorMessageText(){
        return 'Error: Last Name is required';
    }

    get postalErrorMessageText(){
        return 'Error: Postal Code is required';
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

    enterCheckoutInfoWithoutFirstname(lastname, zipCode) {
        //set last name
        cy.get(this.lastnameField).type(checkoutInfo.lastname);
        //set zip code
        cy.get(this.zipCodeField).type(checkoutInfo.zipCode);
        //click continue button
        cy.get(this.btnContinue).click();
    }

    enterCheckoutInfoWithoutLastname(firstname, zipCode) {
        //set first name
        cy.get(this.firstnameField).type(checkoutInfo.firstname);
        //set zip code
        cy.get(this.zipCodeField).type(checkoutInfo.zipCode);
        //click continue button
        cy.get(this.btnContinue).click();
    }

    enterCheckoutInfoWithoutPostal(firstname, lastname) {
        //set first name
        cy.get(this.firstnameField).type(checkoutInfo.firstname);
        //set last name
        cy.get(this.lastnameField).type(checkoutInfo.lastname);
        //click continue button
        cy.get(this.btnContinue).click();
    }

}
export default new CheckoutInfo()