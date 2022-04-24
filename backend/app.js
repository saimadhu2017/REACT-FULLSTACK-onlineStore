require('dotenv').config();

const api = require('./routes/api');

const express = require('express');
const app = express();
const express_json = require('express-json');

app.use(express_json());

api(app);

module.exports = app;