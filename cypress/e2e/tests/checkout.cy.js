import usersData from '../data/users.data';
import checkoutInfoPage from '../pageObjects/checkoutInfo.page';
import Login from '../pageObjects/login.page';
import checkoutOverviewPage from '../pageObjects/checkoutOverview.page';
import checkoutCompletePage from '../pageObjects/checkoutComplete.page'
import { products } from '../data/product.data';
import addToCartPage from '../pageObjects/addToCart.page';

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
    it('should successfully checkout', () => {

        addAnItemToCartTest();

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
        cy.get(checkoutOverviewPage.overviewItemName).should('have.text', products[0].name);
        //check item price
        cy.get(checkoutOverviewPage.overviewItemPrice).should('contain', products[0].price);

        //check payment info
        cy.get(checkoutOverviewPage.paymentInfo).should('exist');
        //check card
        cy.get(checkoutOverviewPage.sauceCard).should('exist');

        //check shipping info
        cy.get(checkoutOverviewPage.shippingInfo).should('exist');
        //check free pony
        cy.get(checkoutOverviewPage.freePonyExpressDelivery).should('exist');

        const itemTotal = checkoutOverviewPage.totalCalculation(products[0].price);

        //check that item tax is correct
        cy.get(checkoutOverviewPage.itemTax).should('contain', 
        `$${(products[0].price * checkoutOverviewPage.taxPercent).toFixed(2)}`
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

    //should not checkout if firstname is not entered
    it('should not checkout if firstname is missing', () => {

        addAnItemToCartTest();

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

        addAnItemToCartTest();

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

        addAnItemToCartTest();

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

function addAnItemToCartTest(){
    //check if url is inventory url
    cy.url().should('include', checkoutInfoPage.inventoryUrl);

    //click add to cart button
    addToCartPage.addToCart(products[0].name);

    //check cart item count
    cy.get(addToCartPage.cartBadge).should('have.text', 1);

    //click cart icon
    cy.get(addToCartPage.cartIcon).click();

    //check if url is cart url
    cy.url().should('include', checkoutInfoPage.cartUrl);

    //check page header
    cy.get(addToCartPage.pageHeader).should('be.visible');

    //check quantity
    cy.get(addToCartPage.cartQuantity).should('have.text', 1);

    //check item name
    cy.get(addToCartPage.itemName).should('have.text', products[0].name);

    //check item price
    cy.get(addToCartPage.itemPrice).should('have.text', `$${products[0].price}`);
  }