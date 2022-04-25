require('dotenv').config();

const api = require('./routes/api');

const express = require('express');
const app = express();

app.use(express.json());

api(app);

module.exports = app;