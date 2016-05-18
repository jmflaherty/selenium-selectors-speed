module.exports = function() {
    this.Then(/^I register how long it took to find it$/, function () {
        // console.log("\n " + global.memory.element +
        //     " - " + global.memory.element.selector +
        //     " : " + global.memory.element.selector.searchTimes);
        console.log(JSON.stringify(global.memory, null, 4));
    });
};