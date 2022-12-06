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

    get itemsName() { 
        return ('.inventory_item_name') ;
    }

    get itemsPrice() { 
        return ('.inventory_item_price') ;
    }

    get selectSortDropDown() { 
        return ('.product_sort_container'); 
    }
   
    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }
}
export default new Product()