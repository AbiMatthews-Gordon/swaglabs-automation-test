class AddToCart{

    get cartIcon() { 
        return ('.shopping_cart_link'); 
    }

    get cartBadge() { 
        return ('.shopping_cart_badge');
    }

    get cartItems() { 
        return ('.cart_item'); 
    }

    get cartItemsName() { 
        return ('.inventory_item_name'); 
    }

    get cartQuantity() { 
        return ('.shopping_cart_badge'); 
    }

    get itemsInCart(){
        return ('div.inventory_item_name');
    }

    get itemsInCartPrice(){
        return ('div.inventory_item_price')
    }

    get addToCartBtn() { 
        return ('#add-to-cart-sauce-labs-backpack');
    }

    get removeItemBtns() { 
        return ('//button[text()="Remove"]');
    }
    
    get removeSauceLabBackPackBtn() { 
        return ('#remove-sauce-labs-backpack');
    }

    get removedCartItem() { 
        return ('.removed_cart_item');
    }

    get checkOutBtn() { 
        return ('#checkout'); 
    }

    get pageHeader(){
        return ('.title');
    }

    get itemName(){
        return ('.inventory_item_name');
    }
    
    get itemPrice(){
        return ('.inventory_item_price');
    } 

    get btnRemove(){
        return ('#remove-sauce-labs-backpack');
    }

    addToCart(itemName){

        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    removeFromCart(itemName){

        let removeFromCartBtn = `#remove-${this.applySelectorFormat(itemName)}`

        cy.get(removeFromCartBtn).should('be.visible')
        cy.get(removeFromCartBtn).click()
    }

    navigateToCart(){

        cy.get(this.cartIcon).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }
}
export default new AddToCart()