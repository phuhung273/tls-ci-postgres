const https = require('https')
const fs = require('fs')

const ca = fs.readFileSync('cacert.pem');

console.log(ca);

(async function () {


    let response = await fetch("https://localhost:2443", {
        agent: new https.Agent({ ca: ca })
    });
    let fetchHtml = await response.text();
    console.log(fetchHtml)
})()