class MX{
    elements={
        resolution: () => cy.viewport(1920, 1080),
        URL: () => cy.visit("https://members-qa.coyni.com/login").url().should('include', 'members-qa.coyni.com'),
        title :()=>cy.title().should('include','coyni'),
        Text :()=>cy.contains('Log In to coyni').should('be.visible'),
        text :()=>cy.contains("Welcome back, let’s log in to your coyni account.").should('be.visible'),
        email: () => cy.get("#Email"),
        validateEmail :()=>cy.should('have.value','qa22@yopmail.com'),
        password: () => cy.get("#Password"),
        validatePswd :()=>cy.should('have.value','Admin@123'),
        button: () => cy.get("[type=submit]"),
        title1 :()=>cy.title().should('include','coyni'),
        Text2 :()=>cy.contains('Phone Verification').should('be.visible'),
        //Text3 :()=>cy.should('include','We sent you a 6-digit code to the registered phone number (656) 410-7855. Please enter the verification code below.'),
        resendButton:()=>cy.contains("Resend Verification Code").should('be.visible'),
        OTP: () => cy.get(".relative > :nth-child(1)"),
        buyToken:()=>cy.get('[type=button]')

    }
    login() {
        this.elements.resolution()
        this.elements.url()
        this.elements.title()
        this.elements.Text()
        this.elements.text()
        this.elements.email().type("qa22@yopmail.com")
        this.elements.validateEmail()
        this.elements.password().type("Admin@123")
        this.elements.validatePswd()
        this.elements.button().click()
    }
    OTP() {
        this.elements.resolution()
        this.elements.title1()
        this.elements.Text2()
        //this.elements.Text3()
        this.elements.resendButton()
        this.elements.OTP().type("123456")
    }
    buyToken(){
        
    }
}