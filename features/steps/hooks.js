var myHooks = function () {
    global.memory = {};
    this.Before(function () {

        //driver.windowHandleMaximize([driver.windowHandle]);
    });

    this.After(function () {
        //driver.deleteCookie();
    });
};
module.exports = myHooks;