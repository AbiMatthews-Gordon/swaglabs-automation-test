class Login{

    get usernameField(){
        return ('#user-name');
    }

    get passwordField(){
        return ('#password');
    }

    get btnLogin(){
        return ('#login-button');
    }

    get invalidUsername(){
        return ('#user-name + svg');
    }

    get invalidLoginErrorMessage(){
        return ('h3[data-test="error"]');
    }

    get mainMenuBtn() { 
        return ('#react-burger-menu-btn'); 
    }

    get logOutBtn() { 
        return ('#logout_sidebar_link'); 
    }

    //enter username & password & click login button
    login(username, password){
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.btnLogin).click();
    }

    logout(){
        cy.get(this.mainMenuBtn).click();
        cy.get(this.logOutBtn).click();
    }
}
export default new Login()