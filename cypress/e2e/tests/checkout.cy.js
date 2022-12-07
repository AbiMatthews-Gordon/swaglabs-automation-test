import Login from ('../pageObjects/login.page')
import { loginData } from '../data/checkoutInfo.data';
import checkoutInfo from ('../pageObjects/checkoutInfo.page')
import Cart from ('../pageObjects/Cart.page')


describe('A user', () => {
    //The url that opens before each test
    beforeEach(() => {
        cy.visit('/');

        Login.login(loginData.username, loginData.password);
    });

    // //should successfully checkout
    // it('should successfully checkout', () => {


    //     // add item to cart
    //     cy.get('#add-to-cart-sauce-labs-backpack').click();

    //     //click cart icon
    //     cy.get(this.cartIcon).click();

    //     //check url


    //     //check that title name of item exist
    //     cy.get('.title').should('have.text', 'YOUR CART');

    //     //check quantity
    //     cy.get('.cart_quantity').should('have.text', 1);

    //     //check item name
    //     cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');

    //     //check item price
    //     cy.get('.inventory_item_price').should('have.text', '$29.99');

    //     //click checkout button 
    //     cy.get(this.btnCheckout).click();

    //     //check url

    //     //check that page title exist
    //     cy.get('.title').should('have.text', 'CHECKOUT: YOUR INFORMATION');

    //     //fill out fields
    //     cy.get(this.firstnameField).type('Jane');
    //     cy.get(this.lastnameField).type('Doe');
    //     cy.get(this.zipCodeField).type('00000');

    //     //click continue btn
    //     cy.get(this.btnContinue).click();

    //     //check url

    //     //check page title
    //     cy.get('.title').should('have.text', 'CHECKOUT: OVERVIEW');

    //     //check item name
    //     cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    //     //check item price
    //     cy.get('.inventory_item_price').should('have.text', '$29.99');

    //     //check payment info
    //     cy.get('.summary_info div:nth-child(1)').should('exist');
    //     //check card
    //     cy.get('.summary_info div:nth-child(2)').should('exist');

    //     //check shipping info
    //     cy.get('.summary_info div:nth-child(3)').should('exist');
    //     //check free pony
    //     cy.get('.summary_info div:nth-child(3)').should('exist');

    //     //check item total
    //     cy.get('.summary_subtotal_label').should('have.text', '$29.99');
    //     // check tax
    //     cy.get('.summary_tax_label').should('have.text', '$2.40');
    //     //check total
    //     cy.get('.summary_total_label').should('have.text', '$32.39');

    //     //click finish button
    //     cy.get(this.btnFinish).click();

    //     //check url

    //     //check thank you message
    //     cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    //     //check dispatch message
    //     cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    //     //check logo
    //     cy.get('.pony_express').should('exist');

    //     //click back home button
    //     cy.get(this.btnBackHome).click();

    // });

    //should not checkout if firstname is not entered
    it('should not checkout without firstname entered', () => {
        //add item to cart
        

        //check url



    });


    //should not checkout if lastname is not entered


    //should not checkout if zip code is not entered



})