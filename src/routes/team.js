'use strict';

const express = require('express');
const { TeamModel } = require('../models');

const router = express.Router();

router.post('/team', async (req, res, next) => {
  let team = req.body;
  let response = await TeamModel.create(team);
  res.status(200).send(response);
});

router.get('/team', async (req, res, next) => {
  let allTeams = await TeamModel.readAll();
  res.status(200).send(allTeams);
});

router.get('/team/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneTeam = await TeamModel.readAll();
  res.status(200).send(oneTeam);
});

router.put('/team/:id', async (req, res, next) => {
  let { id } = req.params;
  await TeamModel.update(req.body, {where: { id }});
  let updatedTeam = await TeamModel.findOne({where: { id }});
  res.status(200).send(updatedTeam);
});

router.delete('/team/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedTeam = await TeamModel.delete(id);
  res.status(200).send(deletedTeam);
});

module.exports = router;