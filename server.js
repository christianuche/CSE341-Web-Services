const express = require('express');
const app = express();


const port = 3000;

app.use("/", require("./Week 1/routes"));

app.listen(process.env.port || port);
console.log(`Web Server for CSE341.003 is running on port ${process.env.port || port}`);
