package com.testrunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.baseclass.Base_Class;
import com.helper.File_Reader_Manager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) //cucumber along with Junit
@CucumberOptions(features = "src\\test\\java\\com\\featurefile\\adactin.feature",
glue = "com.stepD",
plugin = {"html:Report/HtmlReport",
		"json:Report/Cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/Extent_Report.html",
		"pretty"
		},
monochrome = true,
dryRun=false,
strict=true
)

public class Test_Runner {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() throws Throwable {
		String browser = File_Reader_Manager.getInstanceFRM().getInstanceCR().getBrowser();
		driver=Base_Class.browsertype(browser);
	}
	
	@AfterClass
	public static void tear_Down() {
		
		driver.close();

	}

}
