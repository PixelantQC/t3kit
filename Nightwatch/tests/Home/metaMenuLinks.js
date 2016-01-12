var report = require('../../scripts/report.js');

// Objects

// Meta Menu Links
var homeLink = '.nav li:first-child';
var sitemapLink = '.nav li:nth-child(2)';
var loginLink = '.nav li:last-child';

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

  'Meta Menu Nav Links Work': function(browser) {
    browser
      .click(sitemapLink)
      .waitForElementVisible('body', 1000)
      .verify.urlEquals('http://demo.t3kit.testserver.pixelant.nu/header-menu/sitemap/')
      .click(homeLink)
      .waitForElementVisible('body', 1000)
      .verify.urlEquals('http://demo.t3kit.testserver.pixelant.nu/')
      .click(loginLink)
      .waitForElementVisible('body', 1000)
      .verify.urlEquals('http://demo.t3kit.testserver.pixelant.nu/content/form-elements/login-form/');
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
