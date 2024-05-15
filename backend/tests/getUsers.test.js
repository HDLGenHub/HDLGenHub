// getAll.test.js

const request = require('supertest');
const express = require('express');
const router = require('../routes/Users'); // Adjust the path to your actual route file

const app = express();
app.use('/', router);

describe('Get All Users Route', () => {
  it('should return all users and status 200', async () => {
    // Mock the database interaction (e.g., find method)
    const mockFind = jest.fn(() => Promise.resolve([{ name: 'User1' }, { name: 'User2' }]));
    jest.mock('../models/User', () => ({
      find: mockFind,
    }));

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ name: 'User1' }, { name: 'User2' }]);
    expect(mockFind).toHaveBeenCalled();
  });

  it('should handle errors and return status 500', async () => {
    // Mock the database interaction to throw an error
    const mockFindWithError = jest.fn(() => Promise.reject(new Error('Some error')));
    jest.mock('../models/User', () => ({
      find: mockFindWithError,
    }));

    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Some error' });
    expect(mockFindWithError).toHaveBeenCalled();
  });
});
