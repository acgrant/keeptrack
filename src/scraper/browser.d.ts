const puppeteer = require('puppeteer');

const startBrowser = async () => {
    try {
        console.log('Opening browser :D');
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--diable-setuid-sandbox'],
            'ignoreHTTPSErros': true,
        });
        return browser;
    } catch (err) {
        console.log('Trouble arose creating a browser instance O:');
    }
}

module.exports = { startBrowser };