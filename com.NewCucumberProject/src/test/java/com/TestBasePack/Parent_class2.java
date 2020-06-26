package com.TestBasePack;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Parent_class2 extends Parent_Class1 {
	Properties pro;
	FileInputStream f;
	public static WebDriver driver;
	
	public Parent_class2()  throws IOException {

		pro=new Properties();
		f=new FileInputStream("C:\\Users\\New\\git\\"
				+ "jenkin\\com.NewCucumberProject\\Configproperties\\config.properties");
		pro.load(f);

	}

	@Override
	public void getCurrentUrlMethod() {
		String urlofcurrentpage=driver.getCurrentUrl();
		System.out.println("urlof current page"+" "+urlofcurrentpage);
		
	}

	@Override
	public void getpagesource() {

		String pagesource=driver.getPageSource();
		System.out.println("pagesource of current page"+" "+pagesource);
		
	}

	@Override
	public void getTitleOfPage() {
		String title=driver.getTitle();

		System.out.println("title of current page"+" "+title);
	}


	public void initialization() {
		System.setProperty("webdriver.chrome.driver","D:\\All selenium projects\\"
				+ "ALL selenium projects\\com.cucumberproject\\DRIVER\\chromedriver.exe");
		driver=new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		
		driver.get("https://www.gkboptical.com/");
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
	}

}
