class buytokenBank{
    elements= {
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
        invalidOTPtoast:()=>cy.contains('The OTP is Invalid, Provide valid OTP.'),
        TokenAccountButton: ()=> cy.get('#token-dashboard'),
        BuyTokenButton:()=>cy.get('.MerchantWalletDashboard_things_can_do__-myBQ > :nth-child(1)'),
        AddnewBankAccount:()=> cy.get('#small-add-payment-button'),
        MxCheckBox:()=> cy.get('[type="checkbox"]'),
        startButton:()=> cy.get('.w-60.h-9.rounded-full'),
        MxBank:()=>cy.iframe('#iframe', { waitForIframe: true }).find('.kyper-utilityrow-base-middle'),
        checking:()=>cy.iframe('#iframe',{waitForIframe: true}).find('input[value="Checking"]'), 
        continueButton:()=>cy.iframe('#iframe',{waitForIframe: true}).find('.fdwxnma.kyper-button.kyper-primary'),
       // clickBank:()=> cy.get('.f1i86mwt.Body.bold.primary.kyper-text '),
        enterAmount: ()=> cy.get('#cyn-amount-token'),
        conversion:()=>cy.get('[height="28"]'),
        banknextButton: () => cy.validateButtonState(".w-60.h-9.rounded-full.font-semibold.text-center"),
        //buttonClick: () => cy.get(".w-60.h-9.rounded-full.font-semibold.text-center"),
       // bankconfirmButton: () => cy.validateButtonState(".BuyTokenModal_confirm_button__8TAla"),
        confirmButton:()=> cy.get('.BuyTokenModal_confirm_button__8TAla'),
        otp:() => cy.get(".VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)"),
        doneButton: ()=> cy.get('.w-60')
        


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

    addbuyTokenBank(){
        this.elements.resolution()
        this.elements.TokenAccountButton().click()
        this.elements.BuyTokenButton().click()
        this.elements.AddnewBankAccount().click()
        this.elements.MxCheckBox().click()
        cy.wait(2000)
        this.elements.startButton().click()
        cy.wait(20000)
        this.elements.MxBank().click()
        cy.wait(10000)
        this.elements.checking().click()
        this.elements.continueButton().click()

    }
    buyTokenTrans(enterAmount){
        this.elements.resolution()
        cy.wait(15000)
        this.elements.doneButton().click()
        //this.elements.BuyTokenButton().click()
        this.elements.enterAmount().type(enterAmount)
        this.elements.conversion().click()
        cy.wait(3000)
        this.elements.banknextButton()
        cy.wait(2000)
        this.elements.confirmButton().click()
        cy.wait(2000)
        this.elements.otp().type('123456')
        cy.wait(2000)
       
    }
}
export default buytokenBank