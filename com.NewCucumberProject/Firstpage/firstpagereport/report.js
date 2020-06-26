$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featurefiles/firstpage.feature");
formatter.feature({
  "line": 1,
  "name": "First page feature to signup with different user",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Scenario-for signup of different user creating account",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the chrome browser and enters the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser opens he enters the could see web page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "now he clicks on the sign up button and add newcustomer button to signup different customers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "he gives the value as \"\u003cfirstname\u003e\" \"\u003clastname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"\u003cemail id\u003e\" \"\u003cpassword\u003e\" \"\u003cconformpassword\u003e\"  clicks on the create accout button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "finally checks the title and message tat hasbeen displayed and clicks signout button",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email id",
        "password",
        "conformpassword"
      ],
      "line": 13,
      "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;1"
    },
    {
      "cells": [
        "jaiprashanth",
        "jaiprashanth",
        "jaiprashanth123@gmail.com",
        "J@i25041993",
        "J@i25041993"
      ],
      "line": 14,
      "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;2"
    },
    {
      "cells": [
        "RGjai",
        "ramPrshanth",
        "prashanth90.el@gmail.com",
        "J@i71071111",
        "J@i71071111"
      ],
      "line": 15,
      "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;3"
    },
    {
      "cells": [
        "Rgprashanth",
        "gJai",
        "jai_aloysious90@yahoo.com",
        "J@i7107111111",
        "J@i7107111111"
      ],
      "line": 16,
      "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Scenario-for signup of different user creating account",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the chrome browser and enters the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser opens he enters the could see web page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "now he clicks on the sign up button and add newcustomer button to signup different customers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "he gives the value as \"jaiprashanth\" \"jaiprashanth\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"jaiprashanth123@gmail.com\" \"J@i25041993\" \"J@i25041993\"  clicks on the create accout button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "finally checks the title and message tat hasbeen displayed and clicks signout button",
  "keyword": "Then "
});
formatter.match({
  "location": "First_Page_SteDefinition.user_opens_the_chrome_browser_and_enters_the_url()"
});
formatter.result({
  "duration": 25198005954,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.browser_opens_he_enters_the_could_see_web_page()"
});
formatter.result({
  "duration": 17729528,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.now_he_clicks_on_the_sign_up_button_and_add_newcustomer_button_to_signup_different_customers()"
});
formatter.result({
  "duration": 813707,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.WebElementpack.First_Page_WebElement.SignUpButtonMethod(First_Page_WebElement.java:50)\r\n\tat com.StepDefinitionpack.First_Page_SteDefinition.now_he_clicks_on_the_sign_up_button_and_add_newcustomer_button_to_signup_different_customers(First_Page_SteDefinition.java:44)\r\n\tat ✽.And now he clicks on the sign up button and add newcustomer button to signup different customers(Featurefiles/firstpage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "jaiprashanth",
      "offset": 23
    },
    {
      "val": "jaiprashanth",
      "offset": 38
    }
  ],
  "location": "First_Page_SteDefinition.he_gives_the_value_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jaiprashanth123@gmail.com",
      "offset": 11
    },
    {
      "val": "J@i25041993",
      "offset": 39
    },
    {
      "val": "J@i25041993",
      "offset": 53
    }
  ],
  "location": "First_Page_SteDefinition.he_enters_clicks_on_the_create_accout_button(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "First_Page_SteDefinition.finally_checks_the_title_and_message_tat_hasbeen_displayed_and_clicks_signout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Scenario-for signup of different user creating account",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the chrome browser and enters the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser opens he enters the could see web page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "now he clicks on the sign up button and add newcustomer button to signup different customers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "he gives the value as \"RGjai\" \"ramPrshanth\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"prashanth90.el@gmail.com\" \"J@i71071111\" \"J@i71071111\"  clicks on the create accout button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "finally checks the title and message tat hasbeen displayed and clicks signout button",
  "keyword": "Then "
});
formatter.match({
  "location": "First_Page_SteDefinition.user_opens_the_chrome_browser_and_enters_the_url()"
});
formatter.result({
  "duration": 80691204291,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.browser_opens_he_enters_the_could_see_web_page()"
});
formatter.result({
  "duration": 41296243,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.now_he_clicks_on_the_sign_up_button_and_add_newcustomer_button_to_signup_different_customers()"
});
formatter.result({
  "duration": 11040960497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RGjai",
      "offset": 23
    },
    {
      "val": "ramPrshanth",
      "offset": 31
    }
  ],
  "location": "First_Page_SteDefinition.he_gives_the_value_as(String,String)"
});
formatter.result({
  "duration": 1295430876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanth90.el@gmail.com",
      "offset": 11
    },
    {
      "val": "J@i71071111",
      "offset": 38
    },
    {
      "val": "J@i71071111",
      "offset": 52
    }
  ],
  "location": "First_Page_SteDefinition.he_enters_clicks_on_the_create_accout_button(String,String,String)"
});
formatter.result({
  "duration": 11867435640,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.finally_checks_the_title_and_message_tat_hasbeen_displayed_and_clicks_signout_button()"
});
formatter.result({
  "duration": 52564026526,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027JAIPRASHANTH\u0027, ip: \u0027192.168.43.21\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\New\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:63800}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9a7035eeeb4b26c15c9998321bb48219\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.WebElementpack.First_Page_WebElement.SignoutMethod(First_Page_WebElement.java:77)\r\n\tat com.StepDefinitionpack.First_Page_SteDefinition.finally_checks_the_title_and_message_tat_hasbeen_displayed_and_clicks_signout_button(First_Page_SteDefinition.java:66)\r\n\tat ✽.Then finally checks the title and message tat hasbeen displayed and clicks signout button(Featurefiles/firstpage.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Scenario-for signup of different user creating account",
  "description": "",
  "id": "first-page-feature-to-signup-with-different-user;scenario-for-signup-of-different-user-creating-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the chrome browser and enters the url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "browser opens he enters the could see web page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "now he clicks on the sign up button and add newcustomer button to signup different customers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "he gives the value as \"Rgprashanth\" \"gJai\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "he enters \"jai_aloysious90@yahoo.com\" \"J@i7107111111\" \"J@i7107111111\"  clicks on the create accout button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "finally checks the title and message tat hasbeen displayed and clicks signout button",
  "keyword": "Then "
});
formatter.match({
  "location": "First_Page_SteDefinition.user_opens_the_chrome_browser_and_enters_the_url()"
});
formatter.result({
  "duration": 43299590312,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.browser_opens_he_enters_the_could_see_web_page()"
});
formatter.result({
  "duration": 33032595,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.now_he_clicks_on_the_sign_up_button_and_add_newcustomer_button_to_signup_different_customers()"
});
formatter.result({
  "duration": 10850368319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rgprashanth",
      "offset": 23
    },
    {
      "val": "gJai",
      "offset": 37
    }
  ],
  "location": "First_Page_SteDefinition.he_gives_the_value_as(String,String)"
});
formatter.result({
  "duration": 1971089209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jai_aloysious90@yahoo.com",
      "offset": 11
    },
    {
      "val": "J@i7107111111",
      "offset": 39
    },
    {
      "val": "J@i7107111111",
      "offset": 55
    }
  ],
  "location": "First_Page_SteDefinition.he_enters_clicks_on_the_create_accout_button(String,String,String)"
});
formatter.result({
  "duration": 9997341401,
  "status": "passed"
});
formatter.match({
  "location": "First_Page_SteDefinition.finally_checks_the_title_and_message_tat_hasbeen_displayed_and_clicks_signout_button()"
});
formatter.result({
  "duration": 10088282081,
  "status": "passed"
});
});