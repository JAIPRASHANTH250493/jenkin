package Samplejenkins;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HelloWorld {
static WebDriver driver;
	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver","D:\\All selenium projects\\ALL selenium projects\\com.Cucumber.project\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		
		driver.get("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
		
System.out.println("helloworld");
System.out.println("helloworld2");
		System.out.println("helloworld3 ----.added 2nd commit in github");
		System.out.println("helloworld4---> added 3th commit");
		System.out.println("helloworld4---> added 4th commit");
				System.out.println("helloworld4---> added 5th commit");
				System.out.println("helloworld4---> added 6th commit");



	}

}
