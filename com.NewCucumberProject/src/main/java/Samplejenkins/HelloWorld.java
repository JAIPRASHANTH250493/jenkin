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
	}

}
