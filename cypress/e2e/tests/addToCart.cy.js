import usersData from '../data/users.data';
import addToCartPage from '../pageObjects/addToCart.page';
import CheckoutInfoPage from '../pageObjects/checkoutInfo.page';
import Login from '../pageObjects/login.page';
import { products } from '../data/product.data';

describe('The User', () => {
    beforeEach(() => {
        //open the page
        cy.visit('/');

        Login.login(usersData.validUser.username, usersData.validUser.password);
    })

    afterEach(() => {
        Login.logout();
    });

    it('should be able to add a single item to cart', () => {
        addSingleItemToCartTest();
    });

    it('should be able to remove an item from cart', () => {

        //add item to page
        addSingleItemToCartTest();

        // Navigate to the cart
        cy.get(addToCartPage.cartBadge).click();

        // Assert that there is 1 item in the cart then remove the item
        cy.get(addToCartPage.cartQuantity).should('have.text', 1);
        cy.get(addToCartPage.cartItemsName).should('have.text', products[0].name);

        //click remove button
        cy.get(addToCartPage.btnRemove).click();

        // Assert that the item was removed and the cart is empty
        cy.get(addToCartPage.cartItemsName).should('not.exist');
        cy.get(addToCartPage.removedCartItem).should('exist');
    });

    it('should be able to add multiple items to cart', () => {

        //check if url is inventory url
        cy.url().should('include', CheckoutInfoPage.inventoryUrl);

        //add items to cart
        addToCartPage.addToCart(products[0].name);
        addToCartPage.addToCart(products[1].name);
        addToCartPage.addToCart(products[2].name);
        addToCartPage.addToCart(products[3].name);

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
        let itemsAdded = [products[0].name, products[1].name, products[2].name, products[3].name]

        cy.get(addToCartPage.itemsInCart).each(($elem, index) => {

            expect($elem.text()).equal(itemsAdded[index]);
        });

        //check item price
        const pricesAdded = [products[0].price, products[1].price, products[2].price, products[3].price]

        cy.get(addToCartPage.itemsInCartPrice).each(($elem, index) => {

            expect($elem.text()).equal(`$${pricesAdded[index]}`);
        });
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

});

  function addSingleItemToCartTest(){
    //check if url is inventory url
    cy.url().should('include', CheckoutInfoPage.inventoryUrl);

    //click add to cart button
    addToCartPage.addToCart(products[0].name);

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
    cy.get(addToCartPage.itemName).should('have.text', products[0].name);

    //check item price
    cy.get(addToCartPage.itemPrice).should('have.text', `$${products[0].price}`);
  }
  module.exports.addSingleItemToCartTest = addSingleItemToCartTest;