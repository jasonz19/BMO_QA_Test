# BMO_QA_Test
This is a protractor project. Protractor is a UI test framwork which is an end-to-end test framework for Angular and AngularJS applications. Protractor use selenium webdriver. These scripts test http://www.just-eat.co.uk/ search bar. It include 3 test scenarios. For more detail please see example_spec.js

**Setup Envirement:**

    * install node.js
        Download node.js from https://nodejs.org/en/download/. Just use the LTS version
    * Install protractor through execute below commands.
        npm install -g protractor
        webdriver-manager update
    * Install protractor report through execute below command.
        npm install protractor-beautiful-reporter --save-dev

**To run the test:**

```
    protractor conf.js
```

Test report is under tmp\screenshots\


