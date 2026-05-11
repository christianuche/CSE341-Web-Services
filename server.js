const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/professional', (req, res) => {
    res.send('Hello Professional World!');
});

app.get('/contact', (req, res) => {
    res.send('Hello Contact World!');
});






const port = 3000;

app.listen(process.env.port || port);
console.log(`Web Server for CSE341.003 is running on port ${process.env.port || port}`);

