package com.helper;

public class File_Reader_Manager {
	
	private File_Reader_Manager() {
	}
	
	public static File_Reader_Manager getInstanceFRM() {
		File_Reader_Manager FRM=new File_Reader_Manager();
		return FRM;
	}
	
	
	
	
	public ConfigurationReader getInstanceCR() throws Throwable {
		ConfigurationReader CR=new ConfigurationReader();
		return CR;
	}
	

}
