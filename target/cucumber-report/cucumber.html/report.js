$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a user I want to login to Orange Hrm Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2935119700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 83591700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully",
  "description": "",
  "id": "login-test;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1152682800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1103338700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1063072200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 22
    }
  ],
  "location": "LoginSteps.iShouldNavigateToPage(String)"
});
formatter.result({
  "duration": 1050233100,
  "status": "passed"
});
formatter.after({
  "duration": 1185667000,
  "status": "passed"
});
formatter.before({
  "duration": 2258236600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to see Logo on Login page",
  "description": "",
  "id": "login-test;user-should-be-able-to-see-logo-on-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanity"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 11600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLogo()"
});
formatter.result({
  "duration": 1087819700,
  "status": "passed"
});
formatter.after({
  "duration": 631273500,
  "status": "passed"
});
formatter.before({
  "duration": 1889642400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should logout from the website successfully",
  "description": "",
  "id": "login-test;user-should-logout-from-the-website-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on profile",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should be able to logout from the website successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1123355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1096076700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1836070000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnProfile()"
});
formatter.result({
  "duration": 1058558900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogout()"
});
formatter.result({
  "duration": 1558825600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldBeAbleToLogoutFromTheWebsiteSuccessfully()"
});
formatter.result({
  "duration": 203023300,
  "status": "passed"
});
formatter.after({
  "duration": 686734000,
  "status": "passed"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "User Test",
  "description": "\r\nAs a user I want to create and delete record.",
  "id": "user-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2452015100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1121370100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1095477100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1851733800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "user-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be navigated to the \"Add User\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter employee name \"Peter\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter user name \"Peter Mac Anderson\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select user status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter new password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter confirm password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the message \"Successfully Saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1516633100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1058542700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 1357714900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 30
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToThePage(String)"
});
formatter.result({
  "duration": 1037501000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2130672500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 2224055700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter Mac Anderson",
      "offset": 19
    }
  ],
  "location": "UserSteps.iEnterUserName(String)"
});
formatter.result({
  "duration": 1139491000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 20
    }
  ],
  "location": "UserSteps.selectUserStatus(String)"
});
formatter.result({
  "duration": 2126367400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 22
    }
  ],
  "location": "UserSteps.iEnterNewPassword(String)"
});
formatter.result({
  "duration": 1076595600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 26
    }
  ],
  "location": "UserSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1111640500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 1082284700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Saved",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 22032252700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027oxd-toaster_1\u0027]/div\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [81059349a6090690f315a8904e02d4ec, findElement {using\u003dxpath, value\u003d//*[@id\u003d\u0027oxd-toaster_1\u0027]/div}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\Kaushik\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:59950}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59950/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 81059349a6090690f315a8904e02d4ec\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:79)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.getSuccessfulText(AddUserPage.java:82)\r\n\tat com.orangehrmlive.demo.steps.UserSteps.iShouldSeeTheMessage(UserSteps.java:76)\r\n\tat ✽.Then I should see the message \"Successfully Saved\"(user.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 829901000,
  "status": "passed"
});
formatter.before({
  "duration": 2657139800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1094598100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1109426800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1052590900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search the created user and verify it",
  "description": "",
  "id": "user-test;search-the-created-user-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@smoke"
    },
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter employee name \"Peter Mac Anderson\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "select user status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the employee name \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2112475300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1044399700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 1355030900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2158083900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter Mac Anderson",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 2272361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 20
    }
  ],
  "location": "UserSteps.selectUserStatus(String)"
});
formatter.result({
  "duration": 2105890100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "UserSteps.iShouldSeeTheEmployeeName(String)"
});
formatter.result({
  "duration": 3026995200,
  "status": "passed"
});
formatter.after({
  "duration": 658441500,
  "status": "passed"
});
formatter.before({
  "duration": 2542414400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1121080500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1082712800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1056930000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Admin should be able to delete the user successfully",
  "description": "",
  "id": "user-test;admin-should-be-able-to-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@sanity"
    },
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter employee name on system user page \"Peter\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify user displayed in the list",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click on user check box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on ok button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I verify message displayed \"Successfully Deleted\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2163154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1063738000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2137080000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 43
    }
  ],
  "location": "UserSteps.iEnterEmployeeNameOnSystemUserPage(String)"
});
formatter.result({
  "duration": 3179989700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 1084698100,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iVerifyUserDisplayedInTheList()"
});
formatter.result({
  "duration": 229270800,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnUserCheckBox()"
});
formatter.result({
  "duration": 1047290500,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 1057425600,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnOkButton()"
});
formatter.result({
  "duration": 1051819400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Deleted",
      "offset": 28
    }
  ],
  "location": "UserSteps.iVerifyMessageDisplayed(String)"
});
formatter.result({
  "duration": 2038269300,
  "status": "passed"
});
formatter.after({
  "duration": 659617900,
  "status": "passed"
});
formatter.before({
  "duration": 1896820500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1103990100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1100322400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1874804600,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Search the deleted user and verify the message no record found",
  "description": "",
  "id": "user-test;search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I enter employee name on system user page \"Charlie\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select user status on \"Enabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify the message \"No Records Found\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1599822400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1043087700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charlie",
      "offset": 43
    }
  ],
  "location": "UserSteps.iEnterEmployeeNameOnSystemUserPage(String)"
});
formatter.result({
  "duration": 3201523600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2133036100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 25
    }
  ],
  "location": "UserSteps.iSelectUserStatusOn(String)"
});
formatter.result({
  "duration": 2128295900,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 1069582300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 22
    }
  ],
  "location": "UserSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 1033730600,
  "status": "passed"
});
formatter.after({
  "duration": 682115100,
  "status": "passed"
});
});