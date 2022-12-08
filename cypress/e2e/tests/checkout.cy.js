import usersData from '../data/users.data';
import checkoutInfoPage from '../pageObjects/checkoutInfo.page';
import Login from '../pageObjects/login.page';
import { addSingleItemToCartTest } from './addToCart.cy';
import checkoutOverviewPage from '../pageObjects/checkoutOverview.page';
import checkoutCompletePage from '../pageObjects/checkoutComplete.page'
import ProductData from '../data/product.data';

describe('A user', () => {
    //The url that opens before each test
    beforeEach(() => {
        cy.visit('/');

        Login.login(usersData.validUser.username, usersData.validUser.password);
    });

    afterEach(() => {
        Login.logout();
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
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', checkoutInfoPage.checkoutInfoPageHeader);

        //enter info
        checkoutInfoPage.enterCheckoutInfo();

        //click continue btn
        cy.get(checkoutInfoPage.btnContinue).click();

        //check if url if check info two url
        cy.url().should('include', checkoutInfoPage.checkoutInfoUrlTwo);

        //check page header
        cy.get(checkoutOverviewPage.checkoutOverviewPageHeader).should('be.visible');
        cy.get(checkoutOverviewPage.checkoutOverviewPageHeader).should('have.text', checkoutOverviewPage.checkoutOverviewPageTitle);

        //check quantity
        cy.get(checkoutOverviewPage.cartQuantity).should('have.text', 1);

        //check item name
        cy.get(checkoutOverviewPage.overviewItemName).should('have.text', ProductData.products[0].name);
        //check item price
        cy.get(checkoutOverviewPage.overviewItemPrice).should('contain', ProductData.products[0].price);

        //check payment info
        cy.get(checkoutOverviewPage.paymentInfo).should('exist');
        //check card
        cy.get(checkoutOverviewPage.sauceCard).should('exist');

        //check shipping info
        cy.get(checkoutOverviewPage.shippingInfo).should('exist');
        //check free pony
        cy.get(checkoutOverviewPage.freePonyExpressDelivery).should('exist');

        const itemTotal = checkoutOverviewPage.totalCalculation(ProductData.products[0].price);

        //check that item tax is correct
        cy.get(checkoutOverviewPage.itemTax).should('contain', 
        `$${(ProductData.products[0].price * checkoutOverviewPage.taxPercent).toFixed(2)}`
            );

        //check that cart total is correct
        cy.get(checkoutOverviewPage.total).should('contain', `$${itemTotal}`);
 
        //click finish button
        cy.get(checkoutOverviewPage.btnFinish).click();

        //check if url is complete url
        cy.url().should('include', checkoutCompletePage.checkoutCompleteUrl);

        //check page header
        cy.get(checkoutCompletePage.ckeckoutCompletePageHeader).should('be.visible');
        cy.get(checkoutCompletePage.ckeckoutCompletePageHeader).should('have.text', checkoutCompletePage.checkoutCompletePageTitle);

        //check thank you message
        cy.get(checkoutCompletePage.thankYouMessage).should('have.text', checkoutCompletePage.checkoutCompleteTextMessage);
        //check dispatch message
        cy.get(checkoutCompletePage.dispatchedMessage).should('have.text', checkoutCompletePage.checkoutDispatchTextMessage);
        //check logo
        cy.get(checkoutCompletePage.ponyExpressLogo).should('exist');
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
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', checkoutInfoPage.checkoutInfoPageHeader);

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutFirstname();

        cy.get(checkoutInfoPage.firstnameRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.firstnameErrorMessage).should('have.text', checkoutInfoPage.firstnameErrorMessageText);
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
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', checkoutInfoPage.cartHeaderText);

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutLastname();

        cy.get(checkoutInfoPage.lastnameRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.lastnameErrorMessage).should('have.text', checkoutInfoPage.lastnameErrorMessageText);
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
        cy.get(checkoutInfoPage.cartPageHeader).should('have.text', checkoutInfoPage.cartHeaderText);

        // //enter info
        checkoutInfoPage.enterCheckoutInfoWithoutPostal();

        cy.get(checkoutInfoPage.postalRequiredError).should('be.visible');
        cy.get(checkoutInfoPage.postalErrorMessage).should('have.text', checkoutInfoPage.postalErrorMessageText);
    });
});