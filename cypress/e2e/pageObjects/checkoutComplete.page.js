class CheckoutComplete{

    get checkoutCompleteUrl() {
        return ('https://www.saucedemo.com/checkout-complete.html')
    }

    get ckeckoutCompletePageHeader() {
        return ('.title');
    }

    get thankYouMessage() {
        return ('.complete-header');
    }

    get dispatchedMessage() {
        return ('.complete-text');
    }

    get ponyExpressLogo() {
        return ('.pony_express');
    }

    btnBackHome() {
        return ('#back-to-products');
    }

    get checkoutCompletePageTitle(){
        return 'Checkout: Complete!';
    }

    get checkoutCompleteTextMessage(){
        return 'THANK YOU FOR YOUR ORDER';
    }

    get checkoutDispatchTextMessage(){
        return 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
    }

}
export default new CheckoutComplete()