'use strict';

const express = require('express');
const foodRouter = require('../routes/food');
const teamRouter = require('../routes/team');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(teamRouter);
app.use(foodRouter);


module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT))
}