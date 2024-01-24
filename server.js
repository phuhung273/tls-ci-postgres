const https = require('https')
const fs = require('fs')
const express = require("express");
const app = express();

let opts = {
    key: fs.readFileSync("my.key"),
    cert: fs.readFileSync("cert.pem")
};

app.get("/", (req, res) => {
    res.status = 200;
    res.end('hello');
});

https.createServer(opts, app).listen(2443);