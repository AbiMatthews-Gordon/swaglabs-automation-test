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

    // totalCalculation(itemPrice){

    //     //add item total to tax
    //     let total = this.itemTotal + this.itemTax;
    //     cy.log(total);

    //     //verify total cost
    //     cy.get(this.total).should('be.visible');
    //     cy.get(this.total).should('contain', this.itemPrice);
    // }
}
export default new CheckoutOverview()