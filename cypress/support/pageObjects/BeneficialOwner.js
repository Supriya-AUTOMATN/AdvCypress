class BeneficialOwner {
    elements={
        firstName :(firstname)=> cy.enterText("#first-name-0",firstname,"First Name"),
        lastName :(lastname)=> cy.enterText("#last-name-0",lastname,"Last Name"),
        dateOfBirth : (dateOfBirth)=> cy.enterText("#date-of-birth-0", dateOfBirth,"Date of Birth"),
        SSN : (SSN)=> cy.enterText("#ssn-0",SSN,"SSN"),
        Ownership : (Ownership)=> cy.enterText("#ownership-0", Ownership, "Ownership %"),
        mailingAddressLine1 : (addressLine1)=> cy.enterText("#address-line-1-0",addressLine1,"Mailing Address Line1"),
        mailingAddressLine2 : (addressLine2)=> cy.enterText("#address-line-0",addressLine2,"Mailing Address Line 2 (optional)"),
        beneficialCity : (city)=> cy.enterText("[name='city']",city,"Company City"),
        beneficialState : (state)=> cy.divDropdown(".FormField_selected_option__7Rw29.undefined.text-cgy4",".z-10 [tabindex='0']",state,"State Dropdown"),
        beneficialZipCode : (zipCode) => cy.enterText("#zip-code",zipCode,"Zip Code"),
        save : ()=> cy.clickEvent("//button[text()='Save']","Save"),
        Next : ()=> cy.clickEvent("//button[text()='Next']", "Next")
    }}
    
    export default BeneficialOwner
