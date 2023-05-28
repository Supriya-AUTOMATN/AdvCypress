class DBAInfo {
    elements={
        DBAName :(name)=> cy.enterText("#dba-name",name,"DBA Name"),
        businessTypeDropdown : (dropdownValue) => cy.divDropdown("div .FormField_selected_option__7Rw29.text-cgy4.text-sm",".z-20 [tabindex='0']",dropdownValue,"business Type Dropdown"),
        CustomerServiceEmail : (email)=>cy.enterText("#email",email,"Customer Email"),
        CustomerPhoneNumber : (phoneNumber)=> cy.enterText("#phone-number",phoneNumber,"Customer Phone Number"),
        MonthlyProcVolume : (MonthlyProcessingVolume)=> cy.enterText("#monthly-processing-volume",MonthlyProcessingVolume,"Monthly Processing Volume" ),
        HighTicket : (HighTicket)=> cy.enterText("high-ticket", HighTicket,"High Ticket"),
        AverageTicket : (AverageTicket)=> cy.enterText("#average-ticket", AverageTicket, "Average Ticket"),
        DBAAddressLine1 : (addressLine1)=> cy.enterText("#address-line-1",addressLine1,"DBA Address Line1"),
        DBAAddressLine2 : (addressLine2)=> cy.enterText("#address-line-2",addressLine2,"DBA Address Line 2 (optional)"),
        DBACity : (city)=> cy.enterText("[name='city']",city,"Company City"),
        DBAState : (state)=> cy.divDropdown(".FormField_selected_option__7Rw29.undefined.text-cgy4",".z-10 [tabindex='0']",state,"State Dropdown"),
        DBAZipCode : (zipCode) => cy.enterText("#zip-code",zipCode,"Zip Code"),
        dbaSelectTimeZone : (SelectTimeZone)=> cy.enterText(),
        Next : ()=> cy.clickEvent("//button[text()='Next']", "Next")
    }}
    
    export default DBAInfo
