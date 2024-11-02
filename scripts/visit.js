const axios = require('axios');

// URL to visit
const url = 'https://github.com/yashksaini-coder'; // Replace with your desired URL

async function visitPage() {
    try {
        // Send the request 1000 times
        for (let i = 0; i < 1000; i++) {
            console.log(`Visit ${i + 1} to ${url}`);
            await axios.get(url); // Send GET request
        }
        console.log('Completed 1000 visits');
    } catch (error) {
        console.error(`Error visiting page: ${error.message}`);
    }
}

// Execute the function
visitPage();
