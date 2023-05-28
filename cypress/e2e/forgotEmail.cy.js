import forgotEmail from "../support/pageObjects/forgotEmail";

const ForgotEmail = new forgotEmail()

describe("forgot email", ()=>{
    it("User click on forgot email link and enter valid phone number", ()=>{
        ForgotEmail.forgotEMail()
    })
})