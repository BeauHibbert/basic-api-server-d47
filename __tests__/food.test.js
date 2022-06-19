'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API requests to food routes', () => {
  test('Create a food', async () => {
    let response = await request.post('/food').send({
      calories: 150,
      foodGroup: 'vegetables',
    });

    expect(response.status).toEqual(200);
    expect(response.body.calories).toEqual(150);
    expect(response.body.foodGroup).toEqual('vegetables');
  });

//   test('Should create a food record', async () => {
//     let response = await request.post('/food').send({
//       calories: 150,
//       foodGroup: 'vegetables',
//     });

//     expect(response.status).toEqual(200);
//     expect(response.body.calories).toEqual(150);
//     expect(response.body.foodGroup).toEqual('vegetables');
//   });
});
