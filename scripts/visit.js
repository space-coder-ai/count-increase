const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// URL to visit
const url = 'https://github.com/tannuiscoding'; // Replace with your desired URL

(async function visitPage() {
    // Set up Chrome options for fast execution
    let options = new chrome.Options();
    options.addArguments('--headless'); // Run in headless mode
    options.addArguments('--disable-infobars');
    options.addArguments('--disable-extensions');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-gpu');
    options.addArguments('--disable-dev-shm-usage');

    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        // Visit the URL 1000 times
        for (let i = 0; i < 1000; i++) {
            console.log(`Visit ${i + 1} to ${url}`);
            await driver.get(url);
        }
    } finally {
        // Close the browser after completion
        await driver.quit();
    }
})();
