module.exports = {
  // This is a iteration helper for 'filtersWork' test
  iter: function (elems, browser, category, attr) {
    elems.value.forEach(function (element, i) {
      browser.elementIdAttribute(element.ELEMENT, attr, function(result){
        this.assert.ok(result.value.indexOf(category) > -1,
          "Item #" + (i+1) + " has " + attr + " set as " + category + "?");
      })
    })
  },
}
