module.exports = function() {
    this.When(/^I search for the (.*) by (.*)$/, function (element, selector) {
        var WikipediaPage = require('../../pages/WikipediaPage');
        var WikipediaPagePO = new WikipediaPage();
        var Timer_machine = require('timer-machine');
        var timer = new Timer_machine();
        var desiredSamples = 1000;

        if (!global.memory.hasOwnProperty(element)){ global.memory[element] = {}; }
        global.memory[element][selector] = {};
        global.memory[element][selector]["searchTimes"] = {};

        for (var count = 1; count <= desiredSamples; count++ ){
            timer.start();
            expect(WikipediaPagePO.findElementBySelector(element, selector));
            global.memory[element][selector]["searchTimes"][count] = timer.timeFromStart();
            timer.stop();
        }

        global.memory[element][selector]["Maximum"] = 0;
        global.memory[element][selector]["Minimum"] = 2000000;
        var sum = 0;

        for (var sample = 1; sample <= desiredSamples; sample++){
            var sampleValue = global.memory[element][selector]["searchTimes"][sample];
            if (sampleValue > global.memory[element][selector]["Maximum"]) {
                global.memory[element][selector]["Maximum"] = sampleValue}
            if (sampleValue < global.memory[element][selector]["Minimum"]) {
                global.memory[element][selector]["Minimum"] = sampleValue}
            sum = sum + sampleValue;
        }
        global.memory[element][selector]["Average"] = sum / desiredSamples;
    });
};