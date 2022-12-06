class Logout{

    get mainMenuBtn() { 
        return ('#react-burger-menu-btn'); 
    }

    get logOutBtn() { 
        return ('#logout_sidebar_link'); 
    }

    logout(){
        cy.get(this.mainMenuBtn).click();
        cy.get(this.logOutBtn).click();
    }
}
export default new Logout()