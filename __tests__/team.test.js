'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const { sequelize } = require('../src/models');
const request = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API', () => {

  test('Create a team', async() => {
    let response = await request.post('/team').send({
      name: 'cougs',
      wins: 12,
      losses: 0,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('cougs');
    expect(response.body.wins).toEqual(12);
    expect(response.body.losses).toEqual(0);
  });

  test('Should read from people', () => {
    expect(true).toBe(false);
  });

  test('Should update a person', () => {
    expect(true).toBe(false);
  });

  test('Should delete a person', () => {
    expect(true).toBe(false);
  });
});






















