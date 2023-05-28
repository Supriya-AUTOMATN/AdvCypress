Feature: This Feature File includes the following screen:
        1. BuyToken bank

End to End scenarios on Buy token bank account

Scenario: User is navigated to the Token Account page and verify the screen in all supported resolutions
When User will be navigated to Buy coyni Tokens and validate the features
Then User should be able to view all the dom elements properly

Scenario Outline: User enter a null data for all the field then verifying the behaviour of fields and Next button should not be enabled
When User enter <text> data in <field> text field and click outside of the text field
Then Verifying the error message for the <field> as <error>
And Next button should not be enabled
Examples:            
|  text   |     field              |    error              |
|         |     Amount             | Amount is required    |

Scenario Outline: User enter a more than Daily limit data then verifying the behaviour of fields and Next button should not be enabled
When User enter <text> data in <field> field 
Then verifying the error message for the <field> as <error>
And Next button should not be enabled
Examples:            
|  text     |     field              |    error                                         |
|  200.00   |     Amount             | You are above your Daily limit of 100.00 CYN.    |

Scenario Outline: User enter a valid amount for the field then verifying the behaviour of fields and Next button should be enabled
When User enter <text> in <field> field 
And Next button should be enabled 
Examples:
|  text    |    field    |      
|  2.00   |   Amount     |

Scenario Outline: User click on amount conversion button then verifying the behaviour of fields and next button should not be enabled
And Next button should not be enabled

Scenario Outline: User click on back button and checkbox should be checked then user click on next button user should navigate to the BUy coyni Tokens screen then verifying the behaviour of Next button
When user click on Back button user should navigate to the Buy coyni tokens page and click on Next button
Then verifying the behaviour of Next button

Scenario Outline: Calculate total amount with processing fees
  Given a purchase amount of <2.00> USD
  And a processing fee of 3.04 USD
  When I calculate the total amount
  Then the total amount should be 5.04 USD 
  And confirm button should be enabled

  Scenario Outline: User enter invalid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                |
  | 123456  |  verification code  | Verification Failed  |

  Scenario Outline: User enter valid data in verification code field then verifying the behavoiur of fields 
  When user enter <text> data in <field> field
  Then verifying the error message for the <field> as <error>

  | text    |  field              | error                    |
  | 123456  |  verification code  | Verification Successful  |


