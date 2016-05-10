module.exports = function() {
    this.When(/^I search for the (.*) by (.*)$/, function (element, selector) {
        var WikipediaPage = require('../../pages/WikipediaPage');
        var WikipediaPagePO = new WikipediaPage();
        expect(WikipediaPagePO.findElementBySelector(element, selector))
    });
};