var duni = require('../helpers/login.js');

module.exports = {
  'Login to Duni': duni.login,
  'Open image panel': function (browser) {
    browser
      .click('div[data-mediaid="83"]')
      .pause(1000)
      .waitForElementVisible('div.qbank_panel__wrapper._cloned', 1000)
      .assert.containsText("div.qbank_panel__wrapper._cloned p.qbank_panel__id span", "83", "Image panel with ID 83 is opened?")
  },
  'Add item to selection': function (browser) {
    browser
      .click('div.qbank_panel__wrapper._cloned div.qbank_panel a')
      .pause(1000)
      .assert.containsText('.counter', '1')
  },
  'Close image panel': function (browser) {
    browser
      .click('div.qbank_panel__wrapper._cloned div.qbank_panel div.qbank_panel__close span')
      .pause(1000)
      .assert.elementNotPresent('div.qbank_panel__wrapper._cloned', 'Image panel with ID 83 is closed?')
      .end();
  }
}
