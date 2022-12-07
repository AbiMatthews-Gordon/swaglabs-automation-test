import { loginData } from '../data/login.data';
import Login from '../pageObjects/login.page';
import ProductData from '../data/product.data';
import Product from '../pageObjects/product.page';


describe('Sort', () => {
    beforeEach(() => {
        cy.visit('/')

        Login.login(loginData.username, loginData.password);
      })

    it('should sort product list from A-Z', () => {

       // Login.login('standard_user','secret_sauce');
        Product.selectSort(ProductData.sort['A to Z']);

        // Sort data list based on name, from A to Z
        ProductData.products.sort();

        cy.get(Product.itemName).each(($elem, index) => {

            expect($elem.text()).equal(ProductData.products[index].name);
        })
    })

    it('should sort product list from Z-A', () => {

       // Login.login('standard_user','secret_sauce');
        Product.selectSort(ProductData.sort['Z to A']);

        // Sort data list based on name, from Z to A
        ProductData.products.sort().reverse();

        cy.get(Product.itemName).each(($elem, index) => {

            expect($elem.text()).equal(ProductData.products[index].name);
        })
    })

    it('should sort product list from low to high', () => {

       // Login.login('standard_user','secret_sauce');
        Product.selectSort(ProductData.sort['Low to High']);

        // Sort data list based on price, from low to high
        ProductData.products.sort((a, b) => a.price - b.price);

        cy.get(Product.itemPrice).each(($elem, index) => {

            expect($elem.text()).equal(`$${ProductData.products[index].price}`);
        })
    })

    it('should sort product list from high to low', () => {

       // Login.login('standard_user','secret_sauce');
        Product.selectSort(ProductData.sort['High to Low']);

        // Sort data list based on price, from high to low
        ProductData.products.sort((a, b) => b.price - a.price);

        cy.get(Product.itemPrice).each(($elem, index) => {

            expect($elem.text()).equal(`$${ProductData.products[index].price}`);
        })
    })
});