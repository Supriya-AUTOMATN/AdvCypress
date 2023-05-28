class forgotEmail {
    elements = {
        resolution: () => cy.viewport(1920, 1080),
        url: () => cy.visit("https://members-qa.coyni.com/login").url().should('include', 'members-qa.coyni.com'),
        title: () => cy.title().should('include', 'coyni'),
        Text: () => cy.contains('Log In to coyni').should('be.visible'),
        text: () => cy.contains("Welcome back, let’s log in to your coyni account.").should('be.visible'),
        forgotEmail: () => cy.contains('Forgot Email?'),
        phoneNumber :()=>cy.get('#Phone_Number'),
        nextButton :()=>cy.contains('Next'),
        firstName :()=>cy.get('#First-Name'),
        lastName : ()=>cy.get('#Last-Name'),
        nextButton1 :()=>cy.contains('Next')

    }
    forgotEMail() {
        this.elements.resolution()
        this.elements.url()
        this.elements.title()
        this.elements.Text()
        this.elements.text()
        this.elements.forgotEmail().click()
        this.elements.phoneNumber().type('(656) 417-9494')
        this.elements.nextButton().click()
        this.elements.firstName().type('test')
        this.elements.lastName().type('merchant')
        this.elements.nextButton1().click()
    }
}
export default forgotEmail