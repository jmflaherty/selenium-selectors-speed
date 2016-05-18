//import path from 'path';
//import {isCI} from '../lib/ci';

module.exports = {
    // - - - - CHIMP - - - -
    watch: false,
    // @focus is recommended to use. @dev and @watch are deprecated.
    watchTags: '@focus,@dev,@watch',
    watchWithPolling: false,
    criticalSteps: null,
    criticalTag: '@critical',
    server: false,
    serverPort: 8060,
    serverHost: 'localhost',
    sync: true,
    offline: false,

    // - - - - CUCUMBER - - - -
    path: './features',
    format: 'pretty',
    tags: '~@ignore',
    singleSnippetPerFile: true,
    recommendedFilenameSeparator: '_',
    chai: false,
    screenshotsOnError: false, //isCI(),
    screenshotsPath: '.screenshots',
    captureAllStepScreenshots: false,
    saveScreenshotsToDisk: true,
    // Note: With a large viewport size and captureAllStepScreenshots enabled,
    // you may run out of memory. Use browser.setViewportSize to make the
    // viewport size smaller.
    saveScreenshotsToReport: false,
    jsonOutput: './report/chimp-report.json', //true,
    //compiler: 'js:' + path.resolve(__dirname, '../lib/babel-register.js'),

    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    platform: 'ANY',
    name: '',
    user: '',
    key: '',
    port: null,
    host: null,
    // deviceName: null,

    // - - - - WEBDRIVER-IO  - - - -
    webdriverio: {
        desiredCapabilities: {},
        logLevel: 'silent',
        // logOutput: null,
        host: '127.0.0.1',
        port: 4444,
        path: '/wd/hub',
        baseUrl: null,
        coloredLogs: true,
        screenshotPath: null,
        waitforTimeout: 500,
        waitforInterval: 250
    },

    // - - - - SESSION-MANAGER  - - - -
    noSessionReuse: false,

    // - - - - PHANTOM  - - - -
    phantom_w: 1280,
    phantom_h: 1024,

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false,
    seleniumDebug: null,
    debugCucumber: null,
    debugBrkCucumber: null,
    debugMocha: null,
    debugBrkMocha: null
};