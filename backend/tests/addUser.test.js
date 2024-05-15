// add.test.js

const request = require('supertest');
const express = require('express');
const router = require('../routes/Users');

const app = express();
app.use('/', router);

describe('Add Route', () => {
  it('should add a new user and return status 200', async () => {
    // Mock the database interaction (e.g., create method)
    const mockCreate = jest.fn(() => Promise.resolve());
    jest.mock('../models/User', () => ({
      create: mockCreate,
    }));

    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      gender: 'male',
      solid: true,
      role: 'user',
      password: 'secret',
    };

    const response = await request(app).post('/add').send(newUser);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(newUser);
    expect(mockCreate).toHaveBeenCalledWith(newUser);
  });

  it('should handle errors and return status 500', async () => {
    // Mock the database interaction to throw an error
    const mockCreateWithError = jest.fn(() => Promise.reject(new Error('Some error')));
    jest.mock('../models/User', () => ({
      create: mockCreateWithError,
    }));

    const newUser = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        gender: 'male',
        solid: true,
        role: 'user',
        password: 'secret',
      };
    const response = await request(app).post('/add').send(newUser);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Some error' });
    expect(mockCreateWithError).toHaveBeenCalledWith(newUser);
  });
});
