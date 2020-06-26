package com.WebElementpack;

import java.io.IOException;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.TestBasePack.Parent_class2;

public class First_Page_WebElement extends Parent_class2 {

	public First_Page_WebElement() throws IOException {
		super();
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="/html/body/div[4]/header/div[2]/ul/li/a")
	public WebElement SignUpButton;

	@FindBy(xpath="//div[@class='login-container']/div[2]//a")
	public WebElement CreatAccountButton;

	@FindBy(id="firstname")
	public WebElement FirstNameTextBox ;

	@FindBy(id="lastname")
	public WebElement LastNameTextBox;

	@FindBy(id="email_address")
	public WebElement EmailIdTextBox;

	@FindBy(id="password")
	public WebElement PasswordTextBox;

	@FindBy(id="password-confirmation")
	public WebElement ConformPasswordTextBox;

	@FindBy(xpath="//form[@class='form create account form-create-account']/div//button")
	public WebElement CreatingTheNewAccountButton;
	
	@FindBy(xpath="//div[@class='header content']/ul[1]")
	public WebElement movetoEelemnt;

	@FindBy(xpath="//div[@class='header content']/ul[1]//ul/li[3]/a")
	public WebElement signoutbutton;

	public void SignUpButtonMethod() {
		SignUpButton.click();
	}
	public void CreatAccountButtonMehtod() {
		CreatAccountButton.click();
	}

	public void FirstNameTextBox_And_LastNameTextBox(String f_name,String L_Name) {

		FirstNameTextBox.sendKeys(f_name);
		LastNameTextBox.sendKeys(L_Name);

	}

	public void Email_Password_Conformpasswrd(String email,String pwd,String cpwd) {
		EmailIdTextBox.sendKeys(email);
		PasswordTextBox.sendKeys(pwd);
		ConformPasswordTextBox.sendKeys(cpwd);
		CreatingTheNewAccountButton.click();
	}
	
	public void moveToElementMethod() {
		Actions action=new Actions(driver);
		action.moveToElement(movetoEelemnt);
		System.out.println("movedto the element");
	}

	public void SignoutMethod() {
		signoutbutton.click();
		System.out.println("signout button clicked here");
	}
}
