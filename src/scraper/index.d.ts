const browserObject = require('./browser.d.ts');
const scraperController = require('./pageController.d.ts');

let browserInstance = browserObject.startBrowser();

scraperController(browserInstance);