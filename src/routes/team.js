'use strict';

const express = require('express');
const { TeamModel } = require('../models');

const router = express.Router();

router.post('/team', async (req, res, next) => {
  let newTeamData = req.body;
  let responseData = await TeamModel.create(newTeamData);
  res.status(200).send(responseData);
});