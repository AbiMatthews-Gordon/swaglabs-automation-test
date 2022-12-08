 class CheckoutOverview{
    // total;

    get checkOverviewUrl() {
        return ('https://www.saucedemo.com/checkout-step-two.html');
    }

    get checkoutOverviewPageHeader() {
        return ('.title');
    }

    get cartQuantity(){
        return ('.cart_quantity');
    }

    get overviewItemName() {
        return ('.inventory_item_name');
    }

    get overviewItemPrice() {
        return ('.inventory_item_price');
    }

    get paymentInfo() {
        return ('.summary_info div:nth-child(1)');
    }

    get sauceCard() {
        return ('.summary_info div:nth-child(2)');
    }

    get shippingInfo() {
        return ('.summary_info div:nth-child(3)');
    }

    get freePonyExpressDelivery() {
        return ('.summary_info div:nth-child(4)');
    }

    get itemTotal() {
        return ('.summary_subtotal_label');
    }

    get itemTax() {
        return ('.summary_tax_label');
    }

    get total() {
        return ('.summary_total_label');
    }

    get btnFinish() {
        return ('#finish');
    }

    get checkoutOverviewPageTitle(){
        return 'Checkout: Overview';
    }

    get taxPercent(){
        return .08;
    }

    totalCalculation(itemPrice){
    //     //add item total to tax
        let total = itemPrice * (1 + this.taxPercent).toFixed(2);
        cy.log(total);

        return total;
    }
}
export default new CheckoutOverview()