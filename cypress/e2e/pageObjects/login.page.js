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

    //enter username & password & click login button
    login(username, password){
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.btnLogin).click();
    }
}
export default new Login()