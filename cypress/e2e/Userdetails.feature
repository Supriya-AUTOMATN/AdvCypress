Feature: This Feature File includes the following screen:
        1. Edit phone number
        2. Edit Email Address
        3. Upload Image

End to End scenarios on User Details

Scenario: User click on user details text in request dropdown then application is navigated to the user details page and verify the screen in all supported resolutions
When user redirected to the user details screen
Then verifying the <text> data
Examples: 

|  text                  |
|  Account Details       |
|  Test Qa               |
|  Account Status:Active |
|  User Details          |
|  Merchant Accounts     |
|  Preferences           |
|  Agreements            |
|  Change Password       |
|  2-Step Authentication |

Scenario Outline: User mouse hover on edit icon and click on edit for the Phone number field then Edit Phone Number Authentication screen should be visible 
Then verifying the description
And click on cross icon pop up should be close


Scenario Outline: User enter invalid data in verification code field then verifying the behaviour of verification fields
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                |
  | 113456  |  verification code  | Verification Failed  |

  Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                    |
  | 123456  |  verification code  | Verification Successful  |

  Scenario Outline: User click on cross icon pop up should be closed
  When user click on cross icon, popup should be closed

  Scenario Outline: User click on Get an SMS code, Phone Verification sceen should be visible 
  When User click on <text> link 
  Then verifying the <message>
  And registered <phone number>

  |  text                      | message                                 |  phone number   | 
  |  Resend verification code  | The verification code has been resent.  |  (656) 410-8999 |

  Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                |
  | 113456  |  verification code  | Verification Failed  |

  Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error> 
  And toast message as <success> 

  | text    |  field              | error                    |  success                      |
  | 123456  |  verification code  | Verification Successful  |  OTP verified successfully    |


Scenario Outline: User enter an null data for the phone number fields then verifying the behaviour of fields and Send Code button should not be enabled
When User enter the null data in <field>
Then Verifying the error message as <error> Address
And Send Code button should not be enabled
Examples:
|  text          |  field                |     error                 |
|                |  New Phone Number     | Please enter phone number |

Scenario Outline: User enter an invalid data for the fields then verifying the behaviour of fields and Send Code button should not be enabled
When User enter the invalid data in <field>
Then Verifying the error message as <error> Address
And Send Code button should not be enabled
Examples:
|  text          |  field                |     error                      |
|   875          |  New Phone Number     | Phone number must be 10 digits |

Scenario Outline: User enter all the valid data in text fields then verifying the New Phone Number screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|  text            |  field                |
|  (656) 410-8999  |  New Phone Number     |

Scenario Outline: User click on Send Code button then Verify Current Phone Number screen should be visible 
Then verifying the description and current <phonenumber>
Examples:
|  phonenumber    |  
|  (656) 410-8999 |

Scenario Outline: User click on back button then Edit Phone Number screen should be displayed
When user entered phone number should be visible 
And Send Code button should be enabled

Scenario Outline: User enter invalid data for verification code field in Verify Current Phone Number screen then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                |
| 113456  |  verification code  | Verification Failed  |

Scenario Outline: User click on Resend Verification Code, Verification Code Sent! message is displayed
When User click on <text> link 
Then verifying the <message> 

|  text                      | message                  | 
|  Resend Verification Code  | Verification Code Sent!  |

Scenario Outline: User enter valid data for verification code field in Verify Current Phone Number then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                    |
| 123456  |  verification code  | Verification Successful  |

Scenario Outline: User entered the valid Verification code in Verify Current Phone Number screen then Verify New Phone Number screen should be visible 
Then verifying the description and New <phonenumber>
Examples:
|  phonenumber    |  
|  (656) 410-8999 |

Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                |
| 121456  |  verification code  | Verification Failed  |

Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                    |
| 123456  |  verification code  | Verification Successful  |

Scenario Outline: User click on Resend Verification Code, Verification Code Sent! message is displayed
When User click on <text> link 
Then verifying the <message> 

|  text                      | message                  | 
|  Resend Verification Code  | Verification Code Sent!  |

Scenario Outline: User entered the valid Verification code from Verify New Phone Number screen then Reconfigure Two-Step Authentication screen should be visible 
Then verifying the <text>
Examples:
| text               |
| Use Manual Entry   |

Scenario Outline: User click on Use Manual Entry button and Scan QR code button then verifying the appropriete content is displayed

Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                |
| 122456  |  verification code  | Verification Failed  |

Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                    |
| 123456  |  verification code  | Verification Successful  |

Scenario Outline: User entered the valid Verification code then Phone Number Changed Successfully screen should be visible 
And click on close button 

-----------------

Scenario Outline: User mouse hover on edit icon and click on edit for the Email Address field then Edit Email Address Authentication screen should be visible 
Then verifying the description  

Scenario Outline: User enter invalid data in verification code field then verifying the error message
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                |
  | 122456  |  verification code  | Verification Failed  |

  Scenario Outline: User enter valid data in verification code field then verifying the error message of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                    |
  | 123456  |  verification code  | Verification Successful  |

  Scenario Outline: User click on Get an SMS code, Phone Verification sceen should be visible 
  When User click on <text> link 
  Then verifying the <message>
  And registered <phonenumber>

  |  text                      | message                                 |  phonenumber    | 
  |  Resend verification code  | The verification code has been resent.  |  (656) 410-8999 |

  Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                |
  | 121456  |  verification code  | Verification Failed  |

  Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error> 
  And toast message as <success> 

  | text    |  field              | error                    |  success                      |
  | 123456  |  verification code  | Verification Successful  |  OTP verified successfully    |

Scenario Outline: User enter an null data for the New Email Address field then verifying the behaviour of field and Send Code button should not be enabled
When User enter the null data in <field>
Then Verifying the error message as <error> Address
And Send Code button should not be enabled
Examples:
|  text          |  field                |   error              |
|                |  New Email Address    |   Email is required  |

Scenario Outline: User enter an invalid data for the fields then verifying the behaviour of fields and Send Code button should not be enabled
When User enter the invalid data in <field>
Then Verifying the error message as <error> Address
And Send Code button should not be enabled
Examples:
|  text          |  field                |     error     |
|   h@g.c        |  New Email Address    | Invalid Email |

Scenario Outline: User enter the valid data in email text fields then verifying the behaviour of Edit Email Address screen and Send Code button should be enabled
When user enter <text> data in <field> field
And Next button should be enabled
Examples:
|  text              |  field                |
|  qa50@yopmail.com  |  New Email Address    |

Scenario Outline: User click on Send Code button then Verify Current Email Address screen should be visible 
Then verifying the description and current <emailAddress>
Examples:
|  emailAddress      |  
|  qa32@yopmail.com  |

Scenario Outline: User click on back button then Edit Email Address screen should be displayed
When user entered email address should be visible 
And Send Code button should be enabled


Scenario Outline: User enter invalid data for verification code field in Verify Current Email Address screen then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                |
| 113456  |  verification code  | Verification Failed  |

Scenario Outline: User click on Resend Verification Code, Verification Code Sent! message is displayed
When User click on <text> link 
Then verifying the <message> 

|  text                      | message                  | 
|  Resend Verification Code  | Verification Code Sent!  |

Scenario Outline: User enter valid data for verification code field in Verify Current Email Address then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                    |
| 123456  |  verification code  | Verification Successful  |

Scenario Outline: User entered the valid Verification code in Verify Email Address screen then Verify New Email Address screen should be visible 
Then verifying the description and New <emailaddress>
Examples:
|  emailaddress     |  
|  qa34@yopmail.com |

Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                |
| 113456  |  verification code  | Verification Failed  |

Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
When user enter <text> data in <field> field
Then verifying the error message for the <field> as <error>

| text    |  field              | error                    |
| 123456  |  verification code  | Verification Successful  |

Scenario Outline: User click on Resend Verification Code, Verification Code Sent! message is displayed
When User click on <text> link 
Then verifying the <message> 

|  text                      | message                  | 
|  Resend Verification Code  | Verification Code Sent!  |


Scenario Outline: User entered the valid Verification code then Email Address Changed Successfully screen should be visible 
And redirected to the login page 


-----------

Scenario Outline: User click on edit image icon then verifying the Account Profile Image screen and behaviour of cross icon
When user click on edit image icon then verifying the Account Profile Image 
And Upload New Image should be enabled 
And click on cross icon popup should be closed

Scenario Outline: User click on Upload New Image button then upload the image then verify save button should be enabled   
When user click on Upload New Image button then click on Click to select image button
Then verifying the Image is uploaded 
And Save button should be enabled 

Scenario Outline: User click on back button then Account Profile Image screen should be displayed
And Upload New Image button should be enabled


