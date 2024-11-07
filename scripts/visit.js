const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const url = 'https://github.com/tannuiscoding';

(async function visitPage() {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-extensions');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-gpu');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        for (let i = 0; i < 500; i++) { // Reduced visits to avoid excessive requests
            console.log(`Visit ${i + 1} to ${url}`);
            await driver.get(url);
        }
    } finally {
        await driver.quit();
    }
})();
