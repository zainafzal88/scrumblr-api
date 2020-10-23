const serverless = require('serverless-http');
const express = require('express');

const app = new express();

app.get('/', (req, res) => {
    res.send('Hello World in Express')
});

module.exports.lambdaHandler = serverless(app);