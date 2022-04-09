const scraperObject = {
    url: 'https://randompatientgenerator.netlify.app/',
    async scraper (browser) {
        console.log(`Navigating to ${this.url}`);
        let page = await browser.newPage();
        await page.goto(this.url);
        await page.waitForSelector('a.button');
        await page.waitForSelector('#age');
        await page.click('a.button');
        const stats = await page.evaluate(() => {
            let patients = [];
            document.querySelectorAll('p2')
                .forEach((element, idx) => {
                    patients.push({
                        idx: element.textContent
                    })
                })

            //
            // age: '#age',
            //     sex: '#sex',
            //     chief_complaint: '#cc',
            //     heart_rate: '#hr',
            //     temperature: '#temp',
            //     respiratory_rate: '#rr',
            //     oxygen_saturation: '#sat',
            //     history_1: '#pmh1',
            //     history_2: '#pmh2',
            // const patient = {};
            // patient['age'] = document.getElementById('#age');
            // patient['sex'] = document.getElementById('#sex');
            // patient['chief_complaint'] = document.getElementById('#cc');
            // patient['heart_rate'] = document.getElementById('#hr');
            // patient['temperature'] = document.getElementById('#temp');
            // patient['respiratory_rate'] = document.getElementByIdr('#rr');
            // patient['oxygen_saturation'] = document.getElementById('#sat');
            // patient['history_1'] = document.getElementById('#pmh1');
            // patient['history_2'] = document.getElementById('#pmh2');
            return patients;
        })
        console.log(stats)
    }
}

module.exports = scraperObject;