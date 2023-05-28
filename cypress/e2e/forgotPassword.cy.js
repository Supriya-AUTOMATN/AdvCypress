import forgotPassword from "../support/pageObjects/forgotPassword";

const forgotPswdd = new forgotPassword()

describe("forgot Password", ()=>{
    it("User click on forgot password link and enter valid email ID", ()=>{
        forgotPswdd.forgotPswd()
    })
})