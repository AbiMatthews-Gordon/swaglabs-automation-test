# SWAGLABS Automation Test 

This is a Cypress Test Automation project for the SwagLabs website, which can be found at https://www.saucedemo.com/. It carries out the following workflows:

* Login
* Add to cart 
* Remove Item from cart 
* Checkout
* Sort

It also includes Data-Driven Tests, Negative Tests and Sorts.

---

## Instructions

1. Clone the repository
2. Navigate to the project's root directory in your Terminal.
3. Enter the command **npm install** to install the ***dependencies***.
4. Enter the given commands below to run tests.

---

## Commands

* To execute a single test in command line:
```bash
npx cypress run --spec < path >
```
Examples
```bash
    npx cypress run --spec .\cypress\e2e\tests\login.cy.js
```
```bash
    npx cypress run --spec .\cypress\e2e\tests\addToCart.cy.js
```
```bash
    npx cypress run --spec .\cypress\e2e\tests\checkout.cy.js
```
```bash
    npx cypress run --spec .\cypress\e2e\tests\sort.cy.js
```
* To execute tests in Cypress
```bash
    npx cypress open
```
* To execute tests in specific browser
```bash
    npx cypress run --browser < browser name >
```
Examples
```bash
    npx cypress run --browser chrome
```
```bash
    npx cypress run --browser firefox
```
**Note:** You must have the browser installed.