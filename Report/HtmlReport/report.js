$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featurefile/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking Hotel in Adactin",
  "description": "",
  "id": "booking-hotel-in-adactin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login To Adactin page",
  "description": "",
  "id": "booking-hotel-in-adactin;login-to-adactin-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The \"\u003cusername\u003e\" In User Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "booking-hotel-in-adactin;login-to-adactin-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "booking-hotel-in-adactin;login-to-adactin-page;;1"
    },
    {
      "cells": [
        "ABC",
        "abc"
      ],
      "line": 10,
      "id": "booking-hotel-in-adactin;login-to-adactin-page;;2"
    },
    {
      "cells": [
        "jancy",
        "avc"
      ],
      "line": 11,
      "id": "booking-hotel-in-adactin;login-to-adactin-page;;3"
    },
    {
      "cells": [
        "JancyRani",
        "Dream@123"
      ],
      "line": 12,
      "id": "booking-hotel-in-adactin;login-to-adactin-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login To Adactin page",
  "description": "",
  "id": "booking-hotel-in-adactin;login-to-adactin-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The \"ABC\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"abc\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4669404000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 76685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 56123100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 1089281700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login To Adactin page",
  "description": "",
  "id": "booking-hotel-in-adactin;login-to-adactin-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The \"jancy\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"avc\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 928448400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jancy",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 59617800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avc",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 78642100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 524363500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login To Adactin page",
  "description": "",
  "id": "booking-hotel-in-adactin;login-to-adactin-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The \"JancyRani\" In User Name Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Dream@123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Click The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 660059100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JancyRani",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_User_Name_Field(String)"
});
formatter.result({
  "duration": 83367200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dream@123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 77463100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 1385755200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Hotel",
  "description": "",
  "id": "booking-hotel-in-adactin;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user Select The \"New York\" in Location",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Select The \"Hotel Sunshine\" in Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The \"Deluxe\" in Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The \"2 - Two\" in No.Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The \"12/01/2022\" in Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The \"13/01/2022\" in Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The \"2 - Two\" in Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The \"1 - One\" in Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click The Search Button And It Navigates To The Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Location(String)"
});
formatter.result({
  "duration": 120178100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Hotels(String)"
});
formatter.result({
  "duration": 124326100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Room_Type(String)"
});
formatter.result({
  "duration": 126641400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_No_Of_Rooms(String)"
});
formatter.result({
  "duration": 113545700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/01/2022",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Check_In_Date(String)"
});
formatter.result({
  "duration": 112663500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13/01/2022",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Check_Out_Date(String)"
});
formatter.result({
  "duration": 100228600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Adults_Per_Room(String)"
});
formatter.result({
  "duration": 128789900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - One",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_The_in_Children_Per_Room(String)"
});
formatter.result({
  "duration": 121942800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Search_Button_And_It_Navigates_To_The_Select_Hotel()"
});
formatter.result({
  "duration": 2688406100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select Hotel",
  "description": "",
  "id": "booking-hotel-in-adactin;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user Select The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click Continue Button And It Navigates To The Book A Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 92609200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_Continue_Button_And_It_Navigates_To_The_Book_A_Hotel()"
});
formatter.result({
  "duration": 1320767900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Book A Hotel",
  "description": "",
  "id": "booking-hotel-in-adactin;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user Enter The \"Jeni\" In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter The \"Alex\" In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The \"Porur, Chennai\" In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The Credit Card No. In Credit Card No. Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select The Month and Year In Expiry Date",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click The Book Now Button And It Navigates To The Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jeni",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_First_Name_Field(String)"
});
formatter.result({
  "duration": 65077400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Last_Name_Field(String)"
});
formatter.result({
  "duration": 58236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Porur, Chennai",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Billing_Address_Field(String)"
});
formatter.result({
  "duration": 65334900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_No_In_Credit_Card_No_Field()"
});
formatter.result({
  "duration": 59975700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 158090400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Month_and_Year_In_Expiry_Date()"
});
formatter.result({
  "duration": 309531800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 84308700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation()"
});
formatter.result({
  "duration": 175284000,
  "status": "passed"
});
});