package com.StepDefinitionpack;

import java.io.IOException;
import java.util.concurrent.TimeUnit;



import com.TestBasePack.Parent_class2;
import com.WebElementpack.First_Page_WebElement;

import cucumber.api.java.en.*;



public class First_Page_SteDefinition extends Parent_class2{


	First_Page_WebElement firstpage;

	public First_Page_SteDefinition() throws IOException {
		super();
		firstpage=new First_Page_WebElement();

	}


	@Given("^User opens the chrome browser and enters the url$")
	public void user_opens_the_chrome_browser_and_enters_the_url() throws Throwable {

		firstpage.initialization();
		


	}

	@When("^browser opens he enters the could see web page$")
	public void browser_opens_he_enters_the_could_see_web_page() throws Throwable {
		firstpage.getCurrentUrlMethod();
		firstpage.getTitleOfPage();
	}

	@When("^now he clicks on the sign up button and add newcustomer button to signup different customers$")
	public void now_he_clicks_on_the_sign_up_button_and_add_newcustomer_button_to_signup_different_customers() throws Throwable {
		firstpage.SignUpButtonMethod();
		firstpage.CreatAccountButtonMehtod();
		
	}

	@When("^he gives the value as \"([^\"]*)\" \"([^\"]*)\"$")
	public void he_gives_the_value_as(String arg1, String arg2) throws Throwable {
		driver.manage().timeouts().pageLoadTimeout(35, TimeUnit.SECONDS);
		firstpage.FirstNameTextBox_And_LastNameTextBox(arg1, arg2); 
	}

	@When("^he enters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"  clicks on the create accout button$")
	public void he_enters_clicks_on_the_create_accout_button(String arg1, String arg2, String arg3) throws Throwable {
		firstpage.Email_Password_Conformpasswrd(arg1, arg2, arg3);
	}

	@Then("^finally checks the title and message tat hasbeen displayed and clicks signout button$")
	public void finally_checks_the_title_and_message_tat_hasbeen_displayed_and_clicks_signout_button() throws Throwable {
		driver.manage().timeouts().pageLoadTimeout(45, TimeUnit.SECONDS);
		firstpage.moveToElementMethod();
		firstpage.getTitleOfPage();
		
		firstpage.SignoutMethod();
	
		firstpage.getTitleOfPage();


	}



}


