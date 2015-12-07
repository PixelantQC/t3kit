var duni = require('../helpers/login.js');

module.exports = {
  'Login to Duni': duni.login,
  'Hack! ...This will be deleted soon... ': function (browser) {
    browser
      .click('.qbank_filter__category li.all')
      .pause(1000)
  },
  'Test if all items are showing': function (browser) {
    browser
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', '83 items are present on a page?')
  },

  // Design Description category:

  'Pick(and uncheck after assertion) "Baby" variant in Design Description': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Baby"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "Baby" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Baby', 'data-design_description');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Baby"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "Check" variant in Design Description': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Check"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Check" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item',
        function(elems){
          browser.globals.iter(elems, browser, 'Check', 'data-design_description');
      })
    browser
      .click('.qbank_filter__category_item a[data-occasion="Check"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "Dots" variant in Design Description': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Dots"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Dots" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Dots', 'data-design_description');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Dots"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },

  // Color Category:

  'Pick(and uncheck after assertion) "Black" variant in Color': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Black"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Black" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Black', 'data-color');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Black"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "Grey" variant in Color': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Grey"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Grey" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Grey', 'data-color');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Grey"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "Brown" variant in Color': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Brown"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Brown" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Brown', 'data-color');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Brown"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },

  //Occasion Category:

  'Pick(and uncheck after assertion) "Autum" variant in Occasion': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Autum"]')
      .pause(1000)
      .verify.elementPresent('div._active div.qbank_griditem__item', 'Some results are found for "Autum" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Autum', 'data-occasion');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Autum"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "Summer" variant in Occasion': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="Summer"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "Summer" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'Summer', 'data-occasion');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="Summer"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "New Year" variant in Occasion': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="New Year"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "New Year" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'New Year', 'data-occasion');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="New Year"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },

  //Price Category

  'Pick(and uncheck after assertion) "A" variant in Price category': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="A"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "A" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'A', 'data-price_category');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="A"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "F" variant in Price category': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="F"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "F" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'F', 'data-price_category');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="F"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
  },
  'Pick(and uncheck after assertion) "C" variant in Price category': function (browser) {
    browser
      .click('.qbank_filter__category_item a[data-occasion="C"]')
      .pause(1000)
      .verify.elementNotPresent('div._active div.qbank_griditem__item', 'No results are found for "C" filter?')
      .elements('css selector', 'div._active div.qbank_griditem__item', function(elems){
        browser.globals.iter(elems, browser, 'C', 'data-price_category');
      });
    browser
      .click('.qbank_filter__category_item a[data-occasion="C"]')
      .pause(1000)
      .assert.containsText('.qbank_filter__selection_singleitem_total', '(83)', 'After uncheck: 83 items are present on a page?')
      .end();
  }
}
