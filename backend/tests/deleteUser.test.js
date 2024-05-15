//const request = require('supertest');
const express = require('express');
const router = require('../routes/Users');
const app = express();
app.use('/', router);

describe('User Routes', () => {
  it('should delete a user and return status 200', async () => {
    // Mock the User model's findByIdAndDelete method
    const mockDelete = jest.fn(() => Promise.resolve());
    jest.mock('../models/User', () => ({
      findByIdAndDelete: mockDelete,
    }));

    const userId = '659c49f34f5e9c4ae7cf9950';

    const response = await request(app).delete(`/delete/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'User Deleted' });
    expect(mockDelete).toHaveBeenCalledWith(userId);
  });

  it('should handle errors and return status 500', async () => {
    // Mock the User model's findByIdAndDelete method to throw an error
    const mockDeleteWithError = jest.fn(() => Promise.reject(new Error('Some error')));
    jest.mock('../models/User', () => ({
      findByIdAndDelete: mockDeleteWithError,
    }));

    const userId = '659c49f34f5e9c4ae7cf9950';

    const response = await request(app).delete(`/delete/${userId}`);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ status: 'Error with delete' });
    expect(mockDeleteWithError).toHaveBeenCalledWith(userId);
  });
});
