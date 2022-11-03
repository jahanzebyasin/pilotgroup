const express = require('express');
const { listenerCount } = require('process');
const routes = require('../src/routes/Routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('connected');
});