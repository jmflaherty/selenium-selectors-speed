function WikipediaPage() {

    var locators = require('./WikipediaPageLocators.json');

    this.findElementBySelector = function(element, selector) {
        return driver.element(getRequiredLocator(element, selector));
    };

    var getRequiredLocator = function (element, selector) {
        //take locators and find the corresponding locator for the required element/selector combination
    }

}

module.exports = WikipediaPage;