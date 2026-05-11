const express = require('express');
const routes = express.Router();

const lesson1Controller = require("../controllers/lesson1");

routes.get('/', lesson1Controller.saluteRoute);

routes.get('/professional', lesson1Controller.professionalRoute);

routes.get('/contact', lesson1Controller.contactRoute);

module.exports = routes;