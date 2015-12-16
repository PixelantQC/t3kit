var report = require('../scripts/report.js');
// Objects

// Search
var searchField = "input[type=text]";
var searchButton = "button[name=btnG]";

// Main area
var mainArea = "#main";

module.exports = {
  'Open Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
  },

  'TEST INFO!' : function (browser) {
    browser
      .verify.visible('body', 'Test source: ' + browser.globals.test_settings.selenium_host)
      .verify.visible('body',
        'Test platform is: ' + browser.options.desiredCapabilities.platform
        + '. Test browser is: ' + browser.options.desiredCapabilities.browserName
        + ' ' + browser.options.desiredCapabilities.version)
      .verify.visible('body', 'Job ID is: ' + browser.sessionId)
  },

  'Search for Night Watch' : function (browser) {
    browser
      .setValue(searchField, 'nightwatch')
      .waitForElementVisible(searchButton, 1000)
      .click(searchButton)
      .pause(1000)
      .verify.containsText(mainArea, 'Night Watch', 'Found Night Watch result in main area?')
  },

  after : function (browser) {
    browser.end();
  },
  afterEach : function (browser, done) {
    report.reportPassed(browser, done);
  }
};
