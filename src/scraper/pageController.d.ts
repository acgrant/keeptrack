const pageScraper = require('./pageScraper.d.ts');

const scrapeAll = async (browserInstance) => {
    try {
        const browser = await browserInstance;
        await pageScraper.scraper(browser);
    } catch (err) {
        console.log('Could not resolve the browser instance => ', err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);