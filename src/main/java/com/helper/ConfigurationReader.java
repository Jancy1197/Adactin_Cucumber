package com.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties p;
	
	public ConfigurationReader() throws Throwable {
		File f= new File("C:\\Users\\jancy\\eclipse-workspace\\AdactinCucumber\\src\\main\\java\\com\\adaccongirationproperty\\Configuration.properties");
		FileInputStream fis= new FileInputStream(f);
		p=new Properties();
		p.load(fis);
				
	}
	
	public String getBrowser() {
			String browser = p.getProperty("browser");
			return browser;
	}
	
	public String getUrl() {
			String url = p.getProperty("url");
			return url;
	}
	
	public String getCardNumber() {
			String cardnumber = p.getProperty("cardnumber");
			return cardnumber;
	}
	
	public String getCardType() {
			String cardtype = p.getProperty("cardtype");
			return cardtype;
	}
	public String getExpiryMonth() {
		String expirymonth = p.getProperty("expirymonth");
		return expirymonth;
	}
	public String getExpiryYear() {
		String expiryyear = p.getProperty("expiryyear");
		return expiryyear;
	}
	public String getCVV() {
		String cvv = p.getProperty("cvv");
		return cvv;
	}
}
