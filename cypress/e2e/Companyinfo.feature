Feature: This Feature File includes the following screen:
        1. Company Information
        2. DBA Information
        3. Beneficial Owner(s)
        4. Agreements
        5. Application Summary

End to End scenarios on coyni Merchant Application

Scenario: User is navigated to the Merchant Application page and verify the screen in all supported resolutions
Given User will be navigated to Merchant Application page and validate the features
Then User should be able to view all the dom elements properly

Scenario Outline: User enter a null data for all the field then verifying the behaviour of fields and Next button should not be enabled
        When User enter the null data in <text> field
        Then Verifying the error message as <error> Address
        And Next button should not be enabled
        Examples:            
|  text   |     field               |    error                    |
|         |  Company Name           | Company name is required    |
|         |  Business Entity        | Business entity is required |
|         |  EIN/TIN                | Cannot be empty             |
|         |  Company Email          | Email is required           |
|         |  Company Phone Number   | Phone number is required    |
|         |  Company Address Line 1 | Address line 1 is required  |
|         |  City                   | City is required            |
|         |  State                  | State is required           |
|         |  Zip Code               | Zip code is required        |

Scenario Outline: User enter an invalid data for all fields then verifying the behaviour of fields and Next button should not be enabled
When User enter the invalid data in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field          |     error             |
|  66            |  EIN/TIN        | Invalid Value         |
| hello@gmail.   |  Company Email  | Invalid email address |
|                |  Company Email  | Invalid email address |
|  h             |  Company Email  | Invalid email address |
|  @%$#$%        |  City           | Invalid city name     |
|  666           |  City           | Invalid city name     |
|  Abcd666@#$    |  City           | Invalid city name     |
|  abcbd         |  Zip Code       | Invalid zip code      |
|  @#$%^         |  Zip Code       | Invalid zip code      |
|                |  Zip Code       | Invalid zip code      |
|   @$%^abd      |  Zip Code       | Invalid zip code      |
|   @ab56        |  Zip Code       | Invalid zip code      |

Scenario Outline: User enter only spaces for all fields then verifying the behaviour of fields and Next button should not be enabled
When User enter only spaces in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field                   |     error                       |
|                |  Company Name            | Cannot contain only blankspaces |
|                |  Company Address Line 1  | Cannot contain only blankspaces |
|                |  City                    | Cannot contain only blankspaces |

Scenario Outline: User enter less than 5 numbers in Zip Code text field then verifying the behaviour of Zip Code text field and Next button should not be enabled
When User enter less than 5 numbers in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field      |     error                 |
|   555          |  Zip Code   | Must be minimum 5 numbers |

Scenario Outline: User enter all the valid data in text fields then verifying the behaviour of company information screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|   text                            |  field                             |
|   Ideyalabs                       |  Company Name                      |
|   Sole Proprietorship / Single LLC|  Business Entity                   |
|   929292929                       |  SSN                               |
|   Ideyalabs@gmail.com             |  Company Email                     |
|   (564)878-6453                   |  Company Phone Number              |
|   Gowra fountain head, Ideyalabs  |  Company Address Line 1            |
|   Gowra fountain head, Ideyalabs  |  Company Address Line 2 (optional) |
|   Hyderabad                       |  City                              |
|   Telangana                       |  State                             |
|   50086                           |  Zip Code                          |
|   United States                   |  Country                           |
|                                   |  Upload Required Documents         |








-----------------------------------------------------------------------------------------------------


Scenario Outline: User enter a null data for all the field then verifying the behaviour of fields and Next button should not be enabled
When User enter the null data in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|   text  |     field               |    error                    |
|         |  First Name             | First name is required      |
|         |  Last Name              | Last name is required       |
|         |  Date of Birth          | Date of birth is required   |
|         |  SSN                    | SSN is required             |
|         |  Ownership %            | Ownership is required       |
|         |  Mailing Address Line 1 | Address line 1 is required  |
|         |  City                   | City is required            |
|         |  State                  | State is required           |
|         |  Zip Code               | Zip code is required        |

Scenario Outline: User enter an invalid data for all fields then verifying the behaviour of fields and Next button should not be enabled
When User enter the invalid data in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field          |     error          |
|  #$%           |  First Name     | Invalid first name |
| $%^&           |  Last Name      | Invalid last name  |
|  99/99/8888    |  Date of Birth  | Invalid Date       |
| 666            |  SSN            | Invalid SSN        |
| 0%             |  Ownership %    | Invalid Ownership  |
|  @             |  City           | Invalid city name  |
|  666           |  City           | Invalid city name  |
|  shwww         |  Zip Code       | Invalid zip code   |
|  @#$%^         |  Zip Code       | Invalid zip code   |
|                |  Zip Code       | Invalid zip code   |

Scenario Outline: User enter only spaces for all fields then verifying the behaviour of fields and Next button should not be enabled
When User enter only spaces in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field                 |     error                       |
|                | First Name             | Cannot contain only blankspaces |
|                | Last Name              | Cannot contain only blankspaces |
|                | Mailing Address Line 1 | Cannot contain only blankspaces |
|                | City                   | Cannot contain only blankspaces |

Scenario Outline: User enter less than 5 numbers in Zip Code text field then verifying the behaviour of Zip Code text field and Next button should not be enabled
When User enter less than 5 numbers in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text          |  field      |     error                 |
|   555          |  Zip Code   | Must be minimum 5 numbers |

Scenario Outline: User enter less than 50%  in Ownership text field then verifying the behaviour of Ownership text field and Next button should not be enabled
When User enter less than 50% in <field>
Then Verifying the error message as <error> Address
And Next button should not be enabled
Examples:
|  text        |  field        |     error                  |
|   5          |  Ownership %  | Add Additional Beneficiary |

Scenario Outline: User enter all the valid data in text fields then verifying the behaviour of Beneficial Owner screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|   text                            |  field                             |
|   Ideyalabs                       |  First Name                        |
|   Tech LLP                        |  Last Name                         |
|   22/02/1999                      |  Date of Birth                     |
|   777-77-7777                     |  SSN                               |
|   56%                             |  Ownership %                       |
|   Gowra fountain head, Ideyalabs  |  Mailing Address Line 1            |
|   Gowra fountain head, Ideyalabs  |  Mailing Address Line 2 (optional) |
|   Hyderabad                       |  City                              |
|   Telangana                       |  State                             |
|   50086                           |  Zip Code                          |
|   United States                   |  Country                           |
|                                   |  Upload Required Documents         |

------------------------------------------------------------------------------------------------

Scenario Outline: User enter all the valid data in text fields then verifying the behaviour of company information screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|   text                            |  field                             |
|   Ideyalabs                       |  Company Name                      |
|   Sole Proprietorship / Single LLC|  Business Entity                   |
|   929292929                       |  SSN                               |
|   Ideyalabs@gmail.com             |  Company Email                     |
|   (564)878-6453                   |  Company Phone Number              |
|   Gowra fountain head, Ideyalabs  |  Company Address Line 1            |
|   Gowra fountain head, Ideyalabs  |  Company Address Line 2 (optional) |
|   Hyderabad                       |  City                              |
|   Telangana                       |  State                             |
|   50086                           |  Zip Code                          |
|   United States                   |  Country                           |
|                                   |  Upload Required Documents         |

Scenario Outline: User enter all the valid data in text fields then verifying the behaviour of DBA information screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|   text                            |  field                         |
|   Ideyalabs                       |  DBA Name                      |
|   Advertising Services (7311)     |  Business Type                 |
|   Ideyalabs@gmail.com             |  Customer Service Email        |
|   929292929                       |  Customer Service Phone        |
|   10000                           |  Monthly Processing Volume     |
|   1000                            |  High Ticket                   |
|   100                             |  Average Ticket                |
|   Gowra fountain head, Ideyalabs  |  DBA Address Line 1            |
|   Gowra fountain head, Ideyalabs  |  DBA Address Line 2 (optional) |
|   Hyderabad                       |  City                          |
|   Telangana                       |  State                         |
|   50086                           |  Zip Code                      |
|   United States                   |  Country                       |
|   Pacific (PST)                   |  Select Time Zone              |
|                                   |  Upload Documents              |

Scenario Outline: User enter all the valid data in text fields then verifying the behaviour of Beneficial Owner screen and Next button should be enabled
When User enter all the valid data in <field>
And Next button should be enabled
Examples:
|   text                            |  field                             |
|   Ideyalabs                       |  First Name                        |
|   Tech LLP                        |  Last Name                         |
|   22/02/1999                      |  Date of Birth                     |
|   777-77-7777                     |  SSN                               |
|   56%                             |  Ownership %                       |
|   Gowra fountain head, Ideyalabs  |  Mailing Address Line 1            |
|   Gowra fountain head, Ideyalabs  |  Mailing Address Line 2 (optional) |
|   Hyderabad                       |  City                              |
|   Telangana                       |  State                             |
|   50086                           |  Zip Code                          |
|   United States                   |  Country                           |
|                                   |  Upload Required Documents         |

Scenario Outline: User read and scroll the Terms of service and privacy policy agreement and click on checkbox then verifying the behaviour of Agreements screen and Agree button should be enabled
When User scroll to the bottom of the document and agree to the TOS and PP agreement
And Next button should be enabled

Scenario Outline: User read and verify all the data then verifying the behaviour of Application summary screen and Submit button should be enabled
When User read and verify all data
And Next button should be enabled
