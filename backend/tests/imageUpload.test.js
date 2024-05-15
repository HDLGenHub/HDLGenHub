// uploads.test.js

const request = require('supertest');
const express = require('express');
const router = require('../routes/main'); // Adjust the path to your actual route file

const app = express();
app.use('/', router);

describe('Uploads Route', () => {
  it('should upload a new image and return status 201', async () => {
    // Mock the database interaction (e.g., create method)
    const mockCreate = jest.fn(() => Promise.resolve());
    jest.mock('../models/User', () => ({
      create: mockCreate,
    }));

    const response = await request(app).post('/uploads').send({ /* your request body here */ });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ msg: 'New image uploaded!' });
    expect(mockCreate).toHaveBeenCalledWith(/* your expected request body here */);
  });

  it('should handle errors and return status 409', async () => {
    // Mock the database interaction to throw an error
    const mockCreateWithError = jest.fn(() => Promise.reject(new Error('Some error')));
    jest.mock('../models/User', () => ({
      create: mockCreateWithError,
    }));

    const response = await request(app).post('/uploads').send({ /* your request body here */ });

    expect(response.status).toBe(409);
    expect(response.body).toEqual({ message: 'Some error' });
    expect(mockCreateWithError).toHaveBeenCalledWith(/* your expected request body here */);
  });
});
