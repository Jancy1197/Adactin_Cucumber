package com.pageobjmanager;

import org.openqa.selenium.WebDriver;

import com.pageobjmodel.Booking;
import com.pageobjmodel.Home_Page;
import com.pageobjmodel.Search_Hotel;
import com.pageobjmodel.Select_Hotel;

public class Page_Obj_Manager {
	
	public  WebDriver driver;
	
	private Home_Page hp;
	private Search_Hotel sh;
	private  Select_Hotel slth;
	private Booking bk;
	
	public Page_Obj_Manager(WebDriver driver1) {
		this.driver=driver1;
	}
	
	public Home_Page getLog() {
		hp=new Home_Page(driver);
		return hp;
	}
	public Search_Hotel getSh() {
		sh=new Search_Hotel(driver);
		return sh;
	}
	public Select_Hotel getSlth() {
		slth=new Select_Hotel(driver);
		return slth;
	}
	public Booking getBk() {
		bk=new Booking(driver);
		return bk;

}}
