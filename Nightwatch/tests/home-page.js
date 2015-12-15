// Objects

// Search
var searchField = "input[type=text]";
var searchButton = "button[name=btnG]";

// Main area
var mainArea = "#main"


module.exports = {
  'Open Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue(searchField, 'nightwatch')
      .waitForElementVisible(searchButton, 1000)
  },

  'Search for Night Watch' : function (browser) {
    browser
      .click(searchButton)
      .pause(1000)
      .assert.containsText(mainArea, 'Night Watch', 'Found Night Watch result in main area?')
      .end();
  }
}
