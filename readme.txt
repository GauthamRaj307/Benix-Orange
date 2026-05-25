Framework setup steps  : bash these commands
     -> npm install @faker-js/faker --save-dev
     -> npm init playwright@latest
     -> npm install dotenv
     -> npm init path
----------------------------------------------------
Execution commands  : npx cross-env NODE_ENV=staging playwright test  -> //replace staging with any other .env file name for using that spec
---------------------------------------------------
Folder structure explanation  : 
     ->Page(folder) : has all the Page Class used in this framework
     ->tests(folder) :  has all the test Class used in this framework
     ->utils(folder) : has a faker class to generate random user data and also has .setup file to save storage state (Stored in `.auth/user-${ENV.ENVIRONMENT}.json`)
     ->config(folder) : has the method that will fetch the data for the test run based on the environment passed with the execution bash command (Staging/Prod -> npx cross-env NODE_ENV=staging playwright test)
---------------------------------------------------
Reporting details  : will take screenshota and video on failure, trace is enabled on first retry
---------------------------------------------------
Assumptions/limitations :  have other interviews scheduled (done this in 7.30 hrs), this website will not respond sometimes....
---------------------------------------------------