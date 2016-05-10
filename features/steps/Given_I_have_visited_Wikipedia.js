module.exports = function() {
    this.Given(/^I have visited Wikipedia$/, function () {
        expect(driver.urlSync("https://en.wikipedia.org/wiki/Main_Page"));
    });
};