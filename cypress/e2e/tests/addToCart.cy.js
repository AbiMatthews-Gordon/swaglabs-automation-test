import { loginData } from '../data/login.data';
import addToCartPage from '../pageObjects/addToCart.page';
import CheckoutInfoPage from '../pageObjects/checkoutInfo.page';
import Login from '../pageObjects/login.page';

describe('The User', () => {
    beforeEach(() => {
        //open the page
        cy.visit('/');

        Login.login(loginData.username, loginData.password);
    })

    it('Add a single item to cart', () => {

        addSingleItemToCartTest();
        
    });

    it('Add multiple items to cart', () => {

        //check if url is inventory url
        cy.url().should('include', CheckoutInfoPage.inventoryUrl);

        //add items to cart
        addToCartPage.addToCart('Sauce Labs Backpack');
        addToCartPage.addToCart('Sauce Labs Bike Light');
        addToCartPage.addToCart('Sauce Labs Bolt T-Shirt');
        addToCartPage.addToCart('Sauce Labs Fleece Jacket');

        //check cart item count
        cy.get(addToCartPage.cartBadge).should('have.text', 4);

        //click cart icon
        cy.get(addToCartPage.cartIcon).click();

        //check if url is cart url
        cy.url().should('include', CheckoutInfoPage.cartUrl);

        //check page header
        cy.get(addToCartPage.pageHeader).should('be.visible');

        //check quantity
        cy.get(addToCartPage.cartQuantity).should('have.text', 4);

        //check item name
        let itemsAdded = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket']

        cy.get(addToCartPage.itemsInCart).each(($elem, index) => {

            expect($elem.text()).equal(itemsAdded[index]);
        });

        //check item price
        const pricesAdded = ['$29.99', '$9.99', '$15.99', '$49.99']

        cy.get(addToCartPage.itemsInCartPrice).each(($elem, index) => {

            expect($elem.text()).equal(pricesAdded[index]);
        });
    });

});

  function addSingleItemToCartTest(){
    //check if url is inventory url
    cy.url().should('include', CheckoutInfoPage.inventoryUrl);

    //click add to cart button
    addToCartPage.addToCart('Sauce Labs Backpack');

    //check cart item count
    cy.get(addToCartPage.cartBadge).should('have.text', 1);

    //click cart icon
    cy.get(addToCartPage.cartIcon).click();

    //check if url is cart url
    cy.url().should('include', CheckoutInfoPage.cartUrl);

    //check page header
    cy.get(addToCartPage.pageHeader).should('be.visible');

    //check quantity
    cy.get(addToCartPage.cartQuantity).should('have.text', 1);

    //check item name
    cy.get(addToCartPage.itemName).should('have.text', 'Sauce Labs Backpack');

    //check item price
    cy.get(addToCartPage.itemPrice).should('have.text', '$29.99');
  }
  module.exports.addSingleItemToCartTest = addSingleItemToCartTest;