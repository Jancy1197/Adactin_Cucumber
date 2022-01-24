Feature: Booking Hotel in Adactin
Scenario Outline: Login To Adactin page
Given user Launch The Application
When user Enter The "<username>" In User Name Field
And user Enter The "<password>" In Password Field
Then user Click The Login Button And It Navigates To The Search Hotel

Examples:
|username|password|
|ABC|abc|
|jancy|avc|
|JancyRani|Dream@123|

Scenario: Search Hotel
When user Select The "New York" in Location
And user Select The "Hotel Sunshine" in Hotels
And user Select The "Deluxe" in Room Type
And user Select The "2 - Two" in No.Of Rooms
And user Select The "12/01/2022" in Check In Date
And user Select The "13/01/2022" in Check Out Date
And user Select The "2 - Two" in Adults Per Room
And user Select The "1 - One" in Children Per Room
Then user Click The Search Button And It Navigates To The Select Hotel

Scenario: Select Hotel
When user Select The Hotel
Then user Click Continue Button And It Navigates To The Book A Hotel

Scenario: Book A Hotel
When user Enter The "Jeni" In First Name Field
And user Enter The "Alex" In Last Name Field
And user Enter The "Porur, Chennai" In Billing Address Field
And user Enter The Credit Card No. In Credit Card No. Field
And user Select The Credit Card Type
And user Select The Month and Year In Expiry Date
And user Enter The CVV Number
Then user Click The Book Now Button And It Navigates To The Booking Confirmation 
 
