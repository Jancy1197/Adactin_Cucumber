package com.stepD;

import org.openqa.selenium.WebDriver;

import com.baseclass.Base_Class;
import com.helper.File_Reader_Manager;
import com.pageobjmanager.Page_Obj_Manager;
import com.testrunner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class{
	
	public static WebDriver driver= Test_Runner.driver;
	public static Page_Obj_Manager pom= new Page_Obj_Manager(driver);

	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getUrl();
		getUrl(url);
	}
	
	@When("^user Enter The \"([^\"]*)\" In User Name Field$")
	public void user_Enter_The_In_User_Name_Field(String username) throws Throwable {
		sendKeystoElement(pom.getLog().getUsername(), username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
		sendKeystoElement(pom.getLog().getPass(), password);
	}

	@Then("^user Click The Login Button And It Navigates To The Search Hotel$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel() throws Throwable {
		clickOnElement(pom.getLog().getLogin());
	}
	
	@When("^user Select The \"([^\"]*)\" in Location$")
	public void user_Select_The_in_Location(String location) throws Throwable {
		dropdown("byvisibletext", pom.getSh().getLocation(), location);
	}
	
	@When("^user Select The \"([^\"]*)\" in Hotels$")
	public void user_Select_The_in_Hotels(String hotel) throws Throwable {
		 dropdown("byvisibletext", pom.getSh().getHotels(), hotel); 
	}
	@When("^user Select The \"([^\"]*)\" in Room Type$")
	public void user_Select_The_in_Room_Type(String roomtype) throws Throwable {
		dropdown("byvisibletext", pom.getSh().getRoom(), roomtype);
	}

	@When("^user Select The \"([^\"]*)\" in No\\.Of Rooms$")
	public void user_Select_The_in_No_Of_Rooms(String noofrooms) throws Throwable {
		dropdown("byvisibletext", pom.getSh().getNumbers(), noofrooms);
	}

	@When("^user Select The \"([^\"]*)\" in Check In Date$")
	public void user_Select_The_in_Check_In_Date(String cidate) throws Throwable {
		clearElement(pom.getSh().getCheckIn());
		sendKeystoElement(pom.getSh().getCheckIn(), cidate);
	}

	@When("^user Select The \"([^\"]*)\" in Check Out Date$")
	public void user_Select_The_in_Check_Out_Date(String codate) throws Throwable {
		clearElement(pom.getSh().getCheckOut());
		sendKeystoElement(pom.getSh().getCheckOut(), codate);
	}

	@When("^user Select The \"([^\"]*)\" in Adults Per Room$")
	public void user_Select_The_in_Adults_Per_Room(String Arooms) throws Throwable {
		dropdown("byvisibletext", pom.getSh().getAdult_room(), Arooms);
	}

	@When("^user Select The \"([^\"]*)\" in Children Per Room$")
	public void user_Select_The_in_Children_Per_Room(String Crooms) throws Throwable {
		dropdown("byvisibletext", pom.getSh().getChild_room(), Crooms);
	}


	@Then("^user Click The Search Button And It Navigates To The Select Hotel$")
	public void user_Click_The_Search_Button_And_It_Navigates_To_The_Select_Hotel() throws Throwable {
		clickOnElement(pom.getSh().getSubmit());
		waiting();
	}

	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
	    clickOnElement(pom.getSlth().getRadio());
	}

	@Then("^user Click Continue Button And It Navigates To The Book A Hotel$")
	public void user_Click_Continue_Button_And_It_Navigates_To_The_Book_A_Hotel() throws Throwable {
	    clickOnElement(pom.getSlth().getCont());
	    waiting();
	}

	@When("^user Enter The \"([^\"]*)\" In First Name Field$")
	public void user_Enter_The_In_First_Name_Field(String Fname) throws Throwable {
		sendKeystoElement(pom.getBk().getFirst_Name(), Fname);
	}

	@When("^user Enter The \"([^\"]*)\" In Last Name Field$")
	public void user_Enter_The_In_Last_Name_Field(String Lname) throws Throwable {
		  sendKeystoElement(pom.getBk().getLast_Name(),Lname);
	}

	@When("^user Enter The \"([^\"]*)\" In Billing Address Field$")
	public void user_Enter_The_In_Billing_Address_Field(String address) throws Throwable {
		  sendKeystoElement(pom.getBk().getAddress(), address);
	}	

	@When("^user Enter The Credit Card No\\. In Credit Card No\\. Field$")
	public void user_Enter_The_Credit_Card_No_In_Credit_Card_No_Field() throws Throwable {
	    String cardNumber = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCardNumber();
		sendKeystoElement(pom.getBk().getCc(), cardNumber);
	}

	@When("^user Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {
		String cardType = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCardType();
	    dropdown("byvisibletext", pom.getBk().getCard(), cardType);
	}

	@When("^user Select The Month and Year In Expiry Date$")
	public void user_Select_The_Month_and_Year_In_Expiry_Date() throws Throwable {
		String expiryMonth = File_Reader_Manager.getInstanceFRM().getInstanceCR().getExpiryMonth();
		dropdown("byvisibletext", pom.getBk().getMonth(), expiryMonth);
		String expiryYear = File_Reader_Manager.getInstanceFRM().getInstanceCR().getExpiryYear();
		dropdown("byvisibletext", pom.getBk().getYear(),expiryYear);
	}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		String cvv = File_Reader_Manager.getInstanceFRM().getInstanceCR().getCVV();
	    sendKeystoElement(pom.getBk().getCvv(),cvv );
	}

	@Then("^user Click The Book Now Button And It Navigates To The Booking Confirmation$")
	public void user_Click_The_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation() throws Throwable {
	    clickOnElement(pom.getBk().getBook());
	    screenshot("Booking");
	}


}
