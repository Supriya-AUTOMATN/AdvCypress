import login from "../support/pageObjects/login";

const loginMerchant = new login()

describe("login", () => {
    beforeEach('Standard resolution', () => {
        loginMerchant.elements.resolution()
    })
    /*it.only('User can able to navigate to the merchant login page', () => {
        loginMerchant.elements.URL()
        //cy.visit('/login')
        cy.url().should('include', 'members-qa.coyni.com/login')

    })
    it('User navigating to login page and validating the title of the page', () => {
        loginMerchant.elements.title().should('eq', 'coyni')
    })
    it('User navigating to login page and validating the heading of the page', () => {
        loginMerchant.elements.head().should('have.text', 'Log In to coyni')
    })
    it('User navigating to login page and validating the sub-heading of the page', () => {
        loginMerchant.elements.subHead().should('have.text', 'Welcome back, let’s log in to your coyni account.')
    })
    it("User navigating to the login page and passing invalid email and invalid password ", () => {

        loginMerchant.login('qa22@yopmail.c', 'Admin@1234')
    })
    it("User navigating to the login page and passing invalid email and valid password ", () => {

        loginMerchant.login('qa22@yopmail.c', 'Admin@123')
    })
    it("User navigating to the login page and passing valid email and invalid password ", () => {

        loginMerchant.login('qa22@yopmail.com', 'Admin@1234')
    })
    it.only("User navigating to the login page and passing valid email and valid password ", () => {

        loginMerchant.login('qa22@yopmail.com', 'Admin@123')
    })
    it.only("User can able to click on having an issue with your authentication app? Get an SMS", () => {
        loginMerchant.OTP()
    })
    it.only('User is validating the description of the phone verification page', () => {
        loginMerchant.elements.getphoneText1().should('be.visible');
    })
    
    it.only('User can able to click the resend verification code button', () => {
        loginMerchant.elements.resendButton().should('be.visible');
    })
    it.only('User can able to click on the go Back button', () => {
        loginMerchant.elements.goBackButton().should('be.visible').click();
    })
    it.only('User navigating to 2 step page and validating the title of the page', () => {
        loginMerchant.elements.title1().should('eq', 'coyni')
    })
    it.only('User navigating to 2 step page and validating the heading of the page', () => {
        loginMerchant.elements.Text2().should('have.text', 'Two-Step Authentication')
    })
    it.only('User is validating the description of the 2 step auth page', () => {
        loginMerchant.elements.getText().should('be.visible');
    });
    
    it.only("User can able to navigate to the 2 step page and passing invalid OTP", () => {
        loginMerchant.enterOTP('123457')
    })
    it.only("User can able to verify the toast message when user entered the invalid OTP", () => {
        loginMerchant.elements.invalidOTPtoast().should('be.visible')
    })

    it.only("User can able to navigate to the 2 step page and passing valid OTP", () => {
        loginMerchant.enterOTP('123456')
    })*/

    // Topic 2*************************************** */
    beforeEach(() => {
        Cypress.Cookies.debug(true)

        cy.visit('https://members-qa.coyni.com/login')

        // clear cookies again after visiting to remove
        // any 3rd party cookies picked up such as cloudflare
        cy.clearCookies()
    })
    it("")














})



