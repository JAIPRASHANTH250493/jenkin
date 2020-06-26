Feature: First page feature to signup with different user
Scenario Outline: Scenario-for signup of different user creating account

	Given User opens the chrome browser and enters the url
	When browser opens he enters the could see web page 
	And now he clicks on the sign up button and add newcustomer button to signup different customers
	When  he gives the value as "<firstname>" "<lastname>" 
	And he enters "<email id>" "<password>" "<conformpassword>"  clicks on the create accout button 
	Then finally checks the title and message tat hasbeen displayed and clicks signout button
		
		
		Examples:
		| firstname | lastname | email id | password | conformpassword |
		| jaiprashanth | jaiprashanth | jaiprashanth123@gmail.com |J@i25041993 | J@i25041993 |
		| RGjai | ramPrshanth | prashanth90.el@gmail.com |J@i71071111 | J@i71071111 |
		| Rgprashanth | gJai | jai_aloysious90@yahoo.com |J@i7107111111 | J@i7107111111 |