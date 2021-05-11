var DATA={"axeReport":false,"releaseName":"TEST_Regression","noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":46,"iterationType":"Single","description":"1.Setup_eMail_MFA","platform":"LINUX","exeTime":"00:01:32","iterations":1,"testcaseName":"1.Setup_eMail_MFA","browser":"Chrome Headless","nopassTests":"43","startTime":"07-May-2021 06:43:02.002","endTime":"07-May-2021 06:44:35.035","scenarioName":"TEST_DIM_Scenarios","bversion":"90","nofailTests":"3","STEPS":[{"data":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"07-May-2021 06:43:11.011","action":"Open","description":"Opened Url: https:\/\/test.psicdemo.com\/psic\/signin","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"setElementTimeOut","tStamp":"07-May-2021 06:43:11.011","action":"setElementTimeOut","description":"Element Wait time changed to 120 second\/s","status":"DONE"},"name":"Change Default Element finding wait time by [<Data>] seconds","type":"step"},{"data":{"stepno":3,"stepName":"Click","tStamp":"07-May-2021 06:43:21.021","action":"Click","description":"Clicking on Signup_Link","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":4,"stepName":"setElementTimeOut","tStamp":"07-May-2021 06:43:21.021","action":"setElementTimeOut","description":"Element Wait time changed to 120 second\/s","status":"DONE"},"name":"Change Default Element finding wait time by [<Data>] seconds","type":"step"},{"data":{"stepno":5,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:21.021","action":"PSIC_Set","description":"Entered Text 'B00088' on 'ProducerCode_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":6,"stepName":"PSIC_Selectbytext","tStamp":"07-May-2021 06:43:21.021","action":"PSIC_Selectbytext","description":"Item\/s 'PRINCIPAL' is\/are selected from list Role_DD","status":"DONE"},"name":"Select item in [<Object>] which has the value: [<Data>]  if the test data is available","type":"step"},{"data":{"stepno":7,"stepName":"RandomAlphabetic","tStamp":"07-May-2021 06:43:21.021","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-7_06-43-21.png","action":"RandomAlphabetic","description":"knuiz generated successfully","status":"PASS"},"name":"To append the given string with random characters","type":"step"},{"data":{"stepno":8,"stepName":"RandomAlphabetic","tStamp":"07-May-2021 06:43:22.022","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-8_06-43-22.png","action":"RandomAlphabetic","description":"jyxsd generated successfully","status":"PASS"},"name":"To append the given string with random characters","type":"step"},{"data":{"stepno":9,"stepName":"storeVariableInDataSheet","tStamp":"07-May-2021 06:43:23.023","action":"storeVariableInDataSheet","description":"Value of variable %FirstName% has been stored into the data sheet","status":"DONE"},"name":"store variable value [<Condition>] in data sheet[<Data>]","type":"step"},{"data":{"stepno":10,"stepName":"storeVariableInDataSheet","tStamp":"07-May-2021 06:43:23.023","action":"storeVariableInDataSheet","description":"Value of variable %LastName% has been stored into the data sheet","status":"DONE"},"name":"store variable value [<Condition>] in data sheet[<Data>]","type":"step"},{"data":{"stepno":11,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:23.023","action":"PSIC_Set","description":"Entered Text 'knuiz' on 'FirstName_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":12,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:23.023","action":"PSIC_Set","description":"Entered Text 'jyxsd' on 'LastName_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":13,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:23.023","action":"PSIC_Set","description":"Entered Text 'pacificspeciality@outlook.com' on 'EmailAddress_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":14,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:24.024","action":"PSIC_Set","description":"Entered Text '9566274235' on 'Phone_Office'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":15,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:24.024","action":"PSIC_Set","description":"Entered Text '9566274235' on 'Phone_Cell'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":16,"stepName":"Random_Alphanumeric","tStamp":"07-May-2021 06:43:24.024","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-16_06-43-24.png","action":"Random_Alphanumeric","description":"qV7WEwGx generated successfully","status":"PASS"},"name":"To append the given string with random characters","type":"step"},{"data":{"stepno":17,"stepName":"storeVariableInDataSheet","tStamp":"07-May-2021 06:43:24.024","action":"storeVariableInDataSheet","description":"Value of variable %UserID% has been stored into the data sheet","status":"DONE"},"name":"store variable value [<Condition>] in data sheet[<Data>]","type":"step"},{"data":{"stepno":18,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:25.025","action":"PSIC_Set","description":"Entered Text 'qV7WEwGx' on 'UserID'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":19,"stepName":"PSIC_SetDecrypt","tStamp":"07-May-2021 06:43:25.025","action":"PSIC_SetDecrypt","description":"Entered Text '********' on 'Password'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":20,"stepName":"PSIC_SetDecrypt","tStamp":"07-May-2021 06:43:25.025","action":"PSIC_SetDecrypt","description":"Entered Text '********' on 'Confirm_Password'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":21,"stepName":"scrollToBottom","tStamp":"07-May-2021 06:43:25.025","action":"scrollToBottom","description":"Browser Scrolled to []","status":"DONE"},"name":"Scroll to bottom","type":"step"},{"data":[{"data":{"stepno":22,"stepName":"switchToFrameByIndex","tStamp":"07-May-2021 06:43:25.025","action":"switchToFrameByIndex","description":"Webdriver switched to new frame by index[0]","status":"DONE"},"name":"Switch to frame which has index: [<Data>]","type":"step"},{"data":{"stepno":23,"stepName":"clickByJS","tStamp":"07-May-2021 06:43:25.025","action":"clickByJS","description":"Clicked on Recaptcha_Checkbox","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":24,"stepName":"takeScreenshot","tStamp":"07-May-2021 06:43:25.025","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-24_06-43-25.png","action":"takeScreenshot","description":"Screenshot is taken","status":"PASS"},"name":"Take a Screen Shot ","type":"step"}],"name":"DIM_WorkFlow:Recaptcha","description":"","startTime":"07-May-2021 06:43:25.025","endTime":"07-May-2021 06:43:27.027","type":"reusable","status":"PASS"},{"data":{"stepno":25,"stepName":"pause","tStamp":"07-May-2021 06:43:32.032","action":"pause","description":"Thread sleep for '5000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":26,"stepName":"switchToDefaultContent","tStamp":"07-May-2021 06:43:32.032","action":"switchToDefaultContent","description":"Webdriver switched to default content","status":"DONE"},"name":"Switching control to the default window","type":"step"},{"data":{"stepno":27,"stepName":"clickByJS","tStamp":"07-May-2021 06:43:32.032","action":"clickByJS","description":"Clicked on Submit_BTN","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":28,"stepName":"pause","tStamp":"07-May-2021 06:43:37.037","action":"pause","description":"Thread sleep for '5000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":29,"stepName":"takeScreenshot","tStamp":"07-May-2021 06:43:37.037","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-29_06-43-37.png","action":"takeScreenshot","description":"Screenshot is taken","status":"PASS"},"name":"Take a Screen Shot ","type":"step"},{"data":{"stepno":30,"stepName":"verifyElementDisplayed","tStamp":"07-May-2021 06:43:38.038","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-30_06-43-38.png","action":"verifyElementDisplayed","description":"Element [ApprovalPending_Txt] is Displayed","status":"PASS"},"name":"Verify if [<Object>] element is displayed","type":"step"},{"data":{"stepno":31,"stepName":"verifyElementDisplayed","tStamp":"07-May-2021 06:43:39.039","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-31_06-43-39.png","action":"verifyElementDisplayed","description":"Element [ApprovalPending_Msg] is Displayed","status":"PASS"},"name":"Verify if [<Object>] element is displayed","type":"step"},{"data":{"stepno":32,"stepName":"Click","tStamp":"07-May-2021 06:43:48.048","action":"Click","description":"Clicking on OK_BTN","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":33,"stepName":"takeScreenshot","tStamp":"07-May-2021 06:43:48.048","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-33_06-43-48.png","action":"takeScreenshot","description":"Screenshot is taken","status":"PASS"},"name":"Take a Screen Shot ","type":"step"}],"name":"DIM_WorkFlow:SignUpforDeleteUser","description":"","startTime":"07-May-2021 06:43:02.002","endTime":"07-May-2021 06:43:53.053","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":34,"stepName":"Open","tStamp":"07-May-2021 06:43:53.053","action":"Open","description":"Opened Url: https:\/\/test.psicdemo.com\/psic\/signin","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":35,"stepName":"setElementTimeOut","tStamp":"07-May-2021 06:43:53.053","action":"setElementTimeOut","description":"Element Wait time changed to 200 second\/s","status":"DONE"},"name":"Change Default Element finding wait time by [<Data>] seconds","type":"step"},{"data":{"stepno":36,"stepName":"verifyElementDisplayed","tStamp":"07-May-2021 06:43:53.053","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-36_06-43-53.png","action":"verifyElementDisplayed","description":"Element [UserLogin_TXT] is Displayed","status":"PASS"},"name":"Verify if [<Object>] element is displayed","type":"step"},{"data":{"stepno":37,"stepName":"PSIC_Set","tStamp":"07-May-2021 06:43:55.055","action":"PSIC_Set","description":"Entered Text 'Salesrep1' on 'UserName_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":38,"stepName":"PSIC_SetDecrypt","tStamp":"07-May-2021 06:43:55.055","action":"PSIC_SetDecrypt","description":"Entered Text '********' on 'Password_TB'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]  if the test data is available","type":"step"},{"data":{"stepno":39,"stepName":"Click","tStamp":"07-May-2021 06:43:55.055","action":"Click","description":"Clicking on Login_BTN","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":40,"stepName":"setElementTimeOut","tStamp":"07-May-2021 06:43:55.055","action":"setElementTimeOut","description":"Element Wait time changed to 10 second\/s","status":"DONE"},"name":"Change Default Element finding wait time by [<Data>] seconds","type":"step"},{"data":{"stepno":41,"stepName":"pause","tStamp":"07-May-2021 06:43:57.057","action":"pause","description":"Thread sleep for '2000","status":"DONE"},"name":"Wait for [<Data>] milli seconds","type":"step"},{"data":{"stepno":42,"stepName":"takeScreenshot","tStamp":"07-May-2021 06:43:57.057","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-42_06-43-57.png","action":"takeScreenshot","description":"Screenshot is taken","status":"PASS"},"name":"Take a Screen Shot ","type":"step"},{"data":{"stepno":43,"stepName":"verifyElementDisplayed","tStamp":"07-May-2021 06:44:09.009","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-43_06-44-09.png","action":"verifyElementDisplayed","description":"Seems Like the Element [Welcome_TXT] is Not Present\/Found in the page Try Adding wait or heal it","status":"FAIL"},"name":"Verify if [<Object>] element is displayed","type":"step"},{"data":{"stepno":44,"stepName":"takeScreenshot","tStamp":"07-May-2021 06:44:10.010","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-44_06-44-10.png","action":"takeScreenshot","description":"Screenshot is taken","status":"PASS"},"name":"Take a Screen Shot ","type":"step"},{"data":{"stepno":45,"stepName":"verifyElementDisplayed","tStamp":"07-May-2021 06:44:22.022","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-45_06-44-22.png","action":"verifyElementDisplayed","description":"Seems Like the Element [Welcome_TXT] is Not Present\/Found in the page Try Adding wait or heal it","status":"FAIL"},"name":"Verify if [<Object>] element is displayed","type":"step"}],"name":"DIM_WorkFlow:User_Login","description":"","startTime":"07-May-2021 06:43:53.053","endTime":"07-May-2021 06:44:23.023","type":"reusable","status":"FAIL"},{"data":[{"data":{"stepno":46,"stepName":"Click","tStamp":"07-May-2021 06:44:33.033","link":"\/img\/TEST_DIM_Scenarios_1.Setup_eMail_MFA_Step-46_06-44-33.png","action":"Click","description":"Seems Like the Element [Profile_Icon] is Not Present\/Found in the page Try Adding wait or heal it","status":"FAIL"},"name":"Click the [<Object>] ","type":"step"}],"name":"DIM_WorkFlow:UserMgmt_Click","description":"","startTime":"07-May-2021 06:44:23.023","endTime":"07-May-2021 06:44:35.035","type":"reusable","status":"FAIL"}],"name":"DIM_WorkFlow:SignupandUserApproval","description":"","startTime":"07-May-2021 06:43:02.002","endTime":"07-May-2021 06:44:35.035","type":"reusable","status":"FAIL"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"}],"iterationMode":"ContinueOnError","exeTime":"00:01:32","testRun":false,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":"DIM_Scenarios","nopassTests":"0","theme":"Sapphire","startTime":"07-May-2021 06:43:02.002","endTime":"07-May-2021 06:44:35.035","projectName":"PSIC_Digital_DIM","maxThreads":1,"bddReport":false,"nofailTests":"1"};