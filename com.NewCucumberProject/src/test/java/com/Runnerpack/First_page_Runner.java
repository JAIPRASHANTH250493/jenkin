package com.Runnerpack;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="Featurefiles/firstpage.feature",
                 glue="com.StepDefinitionpack",
                 dryRun=false,
                 plugin= {"pretty","html:Firstpage/firstpagereport","json:jsonreport/report.json"},
                 monochrome=true)

public class First_page_Runner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
