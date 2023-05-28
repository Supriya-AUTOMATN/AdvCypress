class forgotPassword {
    elements= {
        resolution: () => cy.viewport(1920, 1080),
        url: () => cy.visit("https://members-qa.coyni.com/login").url().should('include', 'members-qa.coyni.com'),
        title: () => cy.title().should('include', 'coyni'),
        Text: () => cy.contains('Log In to coyni').should('be.visible'),
        text: () => cy.contains("Welcome back, let’s log in to your coyni account.").should('be.visible'),
        forgotPswd: ()=> cy.contains('Forgot Password?'),
        email:()=> cy.get('#Email-id'),
        next:()=> cy.contains('Next'),
        OTP: () => cy.get(".relative > :nth-child(1)"),
        enterPswd:()=> cy.get('#Enter_Password'),
        confPswd:()=> cy.get('#confirm_Password'),
        nexT:()=> cy.contains('Submit'),
        login:()=>cy.contains('Log In')
        }
    forgotPswd(){
        this.elements.resolution()
        this.elements.url()
        this.elements.title()
        this.elements.Text()
        this.elements.text()
        this.elements.forgotPswd().click()
        this.elements.email().type('qa22@yopmail.com')
        this.elements.next().click()
        this.elements.OTP().type('123456')
        this.elements.enterPswd().type('Admin@123')
        this.elements.confPswd().type('Admin@123')
        this.elements.nexT().click()
        this.elements.login().click()
    }
}
export default forgotPassword
