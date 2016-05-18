function WikipediaPage() {

    var locators = require('./WikipediaPageLocators.json');

    this.findElementBySelector = function(element, selector) {
        return driver.element(getRequiredLocator(element, selector));
    };

    var getRequiredLocator = function (element, selector) {
        return locators[element][selector];
    }

}

module.exports = WikipediaPage;