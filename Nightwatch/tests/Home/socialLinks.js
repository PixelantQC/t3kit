var report = require('../../scripts/report.js');

// Objects

// Social Icons
var facebookLink = '.header-middle__social-icons .header-middle__social-icon:first-child';
var youtubeLink = '.header-middle__social-icons .header-middle__social-icon:last-child';

module.exports = {
  'Open t3Kit': function(browser) {
    browser
      .url(browser.globals.testingUrl)
      .waitForElementVisible('body', 1000)
      .maximizeWindow();
  },

  'TEST INFO!': function(browser) {
    browser
      .verify.visible('body', 'Test source: ' + browser.globals.test_settings.selenium_host)
      .verify.visible('body',
        'Test platform is: ' + browser.options.desiredCapabilities.platform
        + '. Test browser is: ' + browser.options.desiredCapabilities.browserName
        + ' ' + browser.options.desiredCapabilities.version)
      .verify.visible('body', 'Job ID is: ' + browser.sessionId);
  },

  'Social Links Work': function(browser) {
    browser
      .click(facebookLink)
      .waitForElementVisible('body', 1000)
      .window_handles(function(result) {
         var handle = result.value[1];
         browser.switchWindow(handle);
       })
      .verify.urlContains('facebook')
      .closeWindow()
      .window_handles(function(result) {
         var handle = result.value[0];
         browser.switchWindow(handle);
       })
      .click(youtubeLink)
      .waitForElementVisible('body', 1000)
      .window_handles(function(result) {
         var handle = result.value[1];
         browser.switchWindow(handle);
       })
      .verify.urlContains('youtube');
  },

  after: function(browser) {
    browser.end();
  },

  afterEach: function(browser, done) {
    if (browser.globals.test_settings.selenium_host === ('saucelabs' || 'browserstack')) {
      report.reportPassed(browser, done);
    } else {
      done();
    }
  },
};
