class Product{
    
    get usernameField() { 
        return ('#user-name'); 
    }

    get passwordField() { 
        return ('#password'); 
    }

    get btnLogin() { 
        return ('#login-button') ;
    }

    get itemName() { 
        return ('.inventory_item_name') ;
    }

    get itemPrice() { 
        return ('.inventory_item_price') ;
    }

    get btnAddToCart(){
        return ('#add-to-cart-sauce-labs-backpack');
    }

    get cartNotification() {
        return ('.shopping_cart_badge');
    }

    get btnRemove(){
        return ('#remove-sauce-labs-backpack');
    }

    get selectSortDropDown() { 
        return ('.product_sort_container'); 
    }
   
    //method
    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }

    addItemToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormatting(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }
}
export default new Product()