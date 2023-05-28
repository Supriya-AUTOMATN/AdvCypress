class login {
    elements = {
        resolution: () => cy.viewport(1920, 1080),
        URL: () => cy.visit("https://members-qa.coyni.com/login"),
        title: () => cy.title(),
        head: () => cy.get('.business-login__title'),
        subHead: () => cy.get(".business-login__sub_title"),
        emailVisible: () => cy.validateElementVisibility("#Email"),
        email: () => cy.get("#Email"),
        password: () => cy.get("#Password"),
        valiadateEmailCSS: () => cy.validateCSSProperty(".business-login__sub_title", "color", "rgb(64, 64, 64)"),
        nextButton: () => cy.validateButtonState("[type=submit]"),
        // URL: (url) => cy.verifyUrl(url),
        button: () => cy.get("[type=submit]"),

        GetSMSbutton: () => cy.get('.text-xs.text-left.text-cgy3'),
        getphoneText1: () => {
            return cy.get('.ml-2.text-base.font-bold.text-cgy4')
        },
        resendButton: () => cy.contains('Resend Verification Code'),
        goBackButton: () => cy.contains('Go Back'),
        title1: () => cy.title(),
        getText: () => {
            return cy.get('.flex.cursor-default')
        },
        Text2: () => cy.contains('Two-Step Authentication'),
        Text3: () => cy.get('.VerifyYourIdentity_two_step__sub_title__cgHIF'),
        OTP: () => cy.get(".relative > :nth-child(1)"),
        invalidOTPtoast:()=>cy.contains('The OTP is Invalid, Provide valid OTP.')
    }

    login(email, password) {
        this.elements.valiadateEmailCSS()
        this.elements.emailVisible()
        this.elements.email().type(email).should('have.value', email)
        this.elements.password().type(password).should('have.value', password)
        this.elements.nextButton()
    }
    OTP() {
        cy.wait(2000)
        this.elements.GetSMSbutton().click()
        
        cy.wait(2000)
        this.elements.resendButton().click()
        cy.wait(2000)
        this.elements.goBackButton()
    }
    enterOTP(OTP){
        cy.wait(2000)
        this.elements.OTP().type(OTP)
    }
}

export default login 