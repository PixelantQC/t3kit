var duni = require('../helpers/login.js');

module.exports = {
  'Login to Duni': duni.login,
  'Select 3 Image Items': function (browser) {
    browser
      .click('div.qbank_griditem__wrapper div[data-mediaid="83"] span.qbank_griditem__button')
      .pause(1000)
      .assert.containsText('.counter', '1')
      .click('div.qbank_griditem__wrapper div[data-mediaid="82"] span.qbank_griditem__button')
      .pause(1000)
      .assert.containsText('.counter', '2')
      .click('div.qbank_griditem__wrapper div[data-mediaid="81"] span.qbank_griditem__button')
      .pause(1000)
      .assert.containsText('.counter', '3')
  },
  'Test if Unselect works': function (browser) {
    browser
    .click('div.qbank_griditem__wrapper div[data-mediaid="80"] span.qbank_griditem__button')
    .pause(1000)
    .click('div.qbank_griditem__wrapper div[data-mediaid="80"] span.qbank_griditem__remove')
    .pause(1000)
    .assert.containsText('.counter', '3')
    .click('div.qbank_griditem__wrapper div[data-mediaid="79"] span.qbank_griditem__button')
    .pause(1000)
    .click('div.qbank_griditem__wrapper div[data-mediaid="79"] span.qbank_griditem__remove')
    .pause(1000)
    .assert.containsText('.counter', '3')
  },
  'Navigate to Selection page': function (browser) {
    browser
      .click('a.qbank_selection__btn.selections_page_btn')
      .pause(1000)
      .assert.title("Selections")
      .waitForElementVisible('body', 1000)
  },
  'Test if previously Selected Items are present': function (browser) {
    browser
      .assert.elementPresent('div[data-mediaid="83"]', 'Previously selected image with ID 83 IS present on a page?')
      .assert.elementPresent('div[data-mediaid="82"]', 'Previously selected image with ID 82 IS present on a page?')
      .assert.elementPresent('div[data-mediaid="81"]', 'Previously selected image with ID 81 IS present on a page?')
  },
  'Test if NOT selected items are NOT present': function (browser) {
    browser
      .assert.elementNotPresent('div[data-mediaid="80"]', 'NOT selected image with ID 80 is NOT present on a page?')
      .assert.elementNotPresent('div[data-mediaid="84"]', 'NOT selected image with ID 84 is NOT present on a page?')
      .assert.elementNotPresent('div[data-mediaid="1"]', 'NOT selected image with ID 1 is NOT present on a page?')
  },
  'Open image panel on Selection page': function (browser) {
    browser
    .click('div[data-mediaid="83"]')
    .pause(1000)
    .waitForElementVisible('div.qbank_panel__wrapper._cloned', 1000)
    .assert.containsText("div.qbank_panel__wrapper._cloned p.qbank_panel__id span", "83", "Image panel with ID 83 is opened?")
    .end();
  }
}
