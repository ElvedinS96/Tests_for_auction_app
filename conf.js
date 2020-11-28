exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework : "jasmine",
    specs: ["./Tests/biddingTests.js",
    "./Tests/aboutUsTests.js",
    "./Tests/loginTests.js",
    "./Tests/privacyAndPolicyTests.js",
    "./Tests/registrationTests.js",
    "./Tests/termsAndConditionsTests.js",
    "./Tests/newArrivalsTest.js",
    "./Tests/topRatedTest.js",
    "./Tests/lastChanceTest.js",
    "./Tests/shopTests.js",
    "./Tests/featureCollectionTest.js",
    "./Tests/featureProductsTest.js"
  ],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      },
     capabilities: {
        browserName: 'chrome',
      
      chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
         }
    }
  }