const fs = require('fs');
const MockProjectsJSON = require('../projects/MockProjects.json');

const scraperObject = {
    url: 'https://randompatientgenerator.netlify.app/',
    async scraper (browser) {
        console.log(`Navigating to ${this.url}`);
        let page = await browser.newPage();
        await page.goto(this.url);
        await page.waitForSelector('a.button');
        await page.waitForSelector('#age');
        // let patientCount = 0;
        // while (patientCount < 10) {
            await page.click('a.button');

            const patients = await page.evaluate(() => {
                const patientStats = [];
                const patient = {};
                document.querySelectorAll('p2')
                    .forEach((element, idx) => {
                        switch (idx) {
                            case 1: patient['age'] = element.textContent;
                            case 2: patient['sex'] = element.textContent;
                            case 3: patient['chief_complaint'] = element.textContent;
                            case 4: patient['heart_rate'] = element.textContent;
                            case 5: patient['blood_pressure'] = element.textContent;
                            case 6: patient['temperature'] = element.textContent;
                            case 7: patient['respiratory_rate'] = element.textContent;
                            case 8: patient['oxygen_saturation'] = element.textContent;
                            case 9: patient['history_1'] = element.textContent;
                            case 10: patient['history_2'] = element.textContent;
                            default: console.log('Patient added.')
                        }
                    });
                patientStats.push(patient);
                return patientStats;
            });
            // patientCount++;
        // }
        fs.writeFile('../projects/MockProjects.json', (JSON.stringify([...MockProjectsJSON,...patients], null, 4)), (err) => {
            if (err) throw err;
            else console.log('Data successfully appended.');
        });
        console.log(typeof MockProjectsJSON)
    }
}

module.exports = scraperObject;