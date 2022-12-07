import { loginData } from '../data/login.data';
import checkoutInfoPage from '../pageObjects/checkoutInfo.page';
import Cart from '../pageObjects/addToCart.page';
import Login from '../pageObjects/login.page';
import { addSingleItemToCartTest } from './addToCart.cy';
import checkoutOverviewPage from '../pageObjects/checkoutOverview.page';
import checkoutCompletePage from '../pageObjects/checkoutComplete.page'

describe('A user', () => {
    //The url that opens before each test
    beforeEach(() => {
        cy.visit('/');

        Login.login(loginData.username, loginData.password);
    });

    // //should successfully checkout
    it.only('should successfully checkout', () => {

        addSingleItemToCartTest();

        //click checkout button
        cy.get(checkoutInfoPage.btnCheckout).click();

        //check if url is ckeckout url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrl);

        //check page header
        cy.get(checkoutInfoPage.cartPageHeader).should('be.visible');
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', 'Checkout: Your Information');

        //enter info
        checkoutInfoPage.enterCheckoutInfo();

        //click continue btn
        cy.get(checkoutInfoPage.btnContinue).click();

        //check if url if check info two url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrlTwo);

        //check page header
        cy.get(checkoutOverviewPage.checkoutOverviewPageHeader).should('be.visible');
        cy.get(checkoutOverviewPage.checkoutOverviewPageHeader).should('have.text', 'Checkout: Overview');

        //check quantity
        cy.get(checkoutOverviewPage.cartQuantity).should('have.text', 1);

        //check item name
        cy.get(checkoutOverviewPage.overviewItemName).should('have.text', 'Sauce Labs Backpack');
        //check item price
        cy.get(checkoutOverviewPage.overviewItemPrice).should('contain', '$29.99');

        //check payment info
        cy.get(checkoutOverviewPage.paymentInfo).should('exist');
        //check card
        cy.get(checkoutOverviewPage.sauceCard).should('exist');

        //check shipping info
        cy.get(checkoutOverviewPage.shippingInfo).should('exist');
        //check free pony
        cy.get(checkoutOverviewPage.freePonyExpressDelivery).should('exist');

        //check item total
        cy.get(checkoutOverviewPage.itemTotal).should('contain', '$29.99');
        // check tax
        cy.get(checkoutOverviewPage.itemTax).should('contain', '$2.40');
        //check total
        cy.get(checkoutOverviewPage.total).should('contain', '$32.39');

        checkoutOverviewPage.totalCalculation();

        //click finish button
        cy.get(checkoutOverviewPage.btnFinish).click();

        //check if url is complete url
        cy.url().should('include', checkoutCompletePage.checkoutCompleteUrl);

        //check page header
        cy.get(checkoutCompletePage.ckeckoutCompletePageHeader).should('be.visible');
        cy.get(checkoutCompletePage.ckeckoutCompletePageHeader).should('have.text', 'Checkout: Complete!');

        //check thank you message
        cy.get(checkoutCompletePage.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER');
        //check dispatch message
        cy.get(checkoutCompletePage.dispatchedMessage).should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        //check logo
        cy.get(checkoutCompletePage.ponyExpressLogo).should('exist');

        //go back to products page
        cy.visit('/');
    });

    // //should not checkout if firstname is not entered
    it('should not checkout if firstname is missing', () => {

        addSingleItemToCartTest();

        // //click checkout button
        cy.get(checkoutInfoPage.btnCheckout).click();

        // //check if url is ckeckout url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrl);

        // //check page header
        cy.get(checkoutInfoPage.cartPageHeader).should('be.visible');
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', 'Checkout: Your Information');

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutFirstname();

        cy.get(checkoutInfoPage.firstnameRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.firstnameErrorMessage).should('have.text', 'Error: First Name is required');
    });


    //should not checkout if lastname is not entered
    it('should not checkout if lastname is missing', () => {

        addSingleItemToCartTest();

        // //click checkout button
        cy.get(checkoutInfoPage.btnCheckout).click();

        // //check if url is ckeckout url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrl);

        // //check page header
        cy.get(checkoutInfoPage.cartPageHeader).should('be.visible');
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', 'Checkout: Your Information');

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutLastname();

        cy.get(checkoutInfoPage.lastnameRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.lastnameErrorMessage).should('have.text', 'Error: Last Name is required');
    });

    //should not checkout if zip code is not entered
    it('should not checkout if zip is missing', () => {

        addSingleItemToCartTest();

        // //click checkout button
        cy.get(checkoutInfoPage.btnCheckout).click();

        // //check if url is ckeckout url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrl);

        // //check page header
        cy.get(checkoutInfoPage.cartPageHeader).should('be.visible');
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', 'Checkout: Your Information');

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutPostal();

        cy.get(checkoutInfoPage.postalRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.postalErrorMessage).should('have.text', 'Error: Postal Code is required');
    });
});