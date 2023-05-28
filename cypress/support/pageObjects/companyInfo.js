class Login {
    elements = {
        resolution: () => cy.viewport(1920, 1080),
        url: () => cy.visit("https://members-qa.coyni.com/login").url().should('include', 'members-qa.coyni.com'),
        title :()=>cy.title().should('include','coyni'),
        Text :()=>cy.contains('Log In to coyni').should('be.visible'),
        text :()=>cy.contains("Welcome back, let’s log in to your coyni account.").should('be.visible'),
        email: () => cy.get("#Email"),
        validateEmail :()=>cy.should('have.value','qa26@yopmail.com'),
        password: () => cy.get("#Password"),
        validatePswd :()=>cy.should('have.value','Admin@123'),
        button: () => cy.get("[type=submit]"),
        title1 :()=>cy.title().should('include','coyni'),
        Text2 :()=>cy.contains('Phone Verification').should('be.visible'),
        //Text3 :()=>cy.should('include','We sent you a 6-digit code to the registered phone number (656) 410-7855. Please enter the verification code below.'),
        resendButton:()=>cy.contains("Resend Verification Code").should('be.visible'),
        OTP: () => cy.get(".relative > :nth-child(1)"),
        startApp: ()=> cy.contains('Start Application'),
   // cy.wait(2000)
    companyName:()=> cy.get('#company-name'),
   // cy.wait(2000)
    businessEntity:()=> cy.get('[height="8"]'),
    businessEntity1:()=>cy.get('[tabindex="0"]').eq(0).contains('Sole Proprietorship / Single LLC'),
   // cy.wait(2000)
   ssn:()=> cy.get('[name="entityValue"]'),
    //cy.wait(2000)
    email:()=> cy.get('#email'),
   phoneNumber:()=> cy.get('#phone-number'),
    addressLine1:()=>cy.get('#address-line-1'),
    addressLine2:()=>cy.get('#address-line-2'),
    city:()=>cy.get('#city'),
    //cy.wait(2000)
    state:()=>cy.get('[height="8"]'),
    statE:()=>cy.get('[tabindex="0"]').eq(1).contains('Alabama'),
   // cy.wait(2000)
   zipCode:()=> cy.get('#zip-code'),
   uploadFile:()=> cy.get('[type=file]'),
    uploadFile1:()=>cy.get('[type=file]')

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
    companyInfo(){
        this.elements.resolution()
        this.elements.startApp().click()
        this.elements.companyName().type('GMT PVT LMT')
        this.elements.businessEntity().eq(0).click()
        this.elements.businessEntity1().click()
        this.elements.ssn().type('66-6666666')
        this.elements.email().type('hello@gmail.com')
        this.elements.phoneNumber().type('8282654525',{force:true})
        this.elements.addressLine1().type('hyderabad',{force:true})
        this.elements.addressLine2().type('hyderabad',{force:true})
        this.elements.city().type('telangana')
        this.elements.state().eq(1).click()
        this.elements.statE().click()
        this.elements.zipCode().type('13423',{force:true})
        this.elements.uploadFile().eq(0)
        this.elements.uploadFile1().attachFile('799.jpg')
    }
}

export default Login 