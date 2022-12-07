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

    // checkoutComplete() {
        
    // }
}
export default new CheckoutComplete()