// update.test.js

const request = require('supertest');
const express = require('express');
const router = require('../routes/Users');

const app = express();
app.use('/', router);

describe('Update User Route', () => {
  it('should update a user and return status 200', async () => {
    // Mock the database interaction (e.g., findByIdAndUpdate method)
    const mockFindByIdAndUpdate = jest.fn(() => Promise.resolve({ _id: 'someUserId', ...UpdateUser }));
    jest.mock('../models/User', () => ({
      findByIdAndUpdate: mockFindByIdAndUpdate,
    }));

    const userId = '659c49f34f5e9c4ae7cf9950';
    const UpdateUser = {
      name: 'Updated Name',
      email: 'updated@example.com',
      age: 25,
      gender: 'other',
      solid: false,
      role: 'updatedRole',
      password: 'newPassword',
    };

    const response = await request(app).put(`/update/${userId}`).send(UpdateUser);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'User updated', user: { _id: userId, ...UpdateUser } });
    expect(mockFindByIdAndUpdate).toHaveBeenCalledWith(userId, UpdateUser, { new: true });
  });

  it('should handle user not found and return status 404', async () => {
    // Mock the database interaction to return null (user not found)
    const mockFindByIdAndUpdateNotFound = jest.fn(() => Promise.resolve(null));
    jest.mock('../models/User', () => ({
      findByIdAndUpdate: mockFindByIdAndUpdateNotFound,
    }));

    const userId = 'nonExistentUserId'; // Replace with a non-existent user ID

    const response = await request(app).put(`/update/${userId}`).send(UpdateUser);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ status: 'User not found' });
    expect(mockFindByIdAndUpdateNotFound).toHaveBeenCalledWith(userId, UpdateUser, { new: true });
  });

  it('should handle errors and return status 500', async () => {
    // Mock the database interaction to throw an error
    const mockFindByIdAndUpdateWithError = jest.fn(() => Promise.reject(new Error('Some error')));
    jest.mock('../models/User', () => ({
      findByIdAndUpdate: mockFindByIdAndUpdateWithError,
    }));

    const userId = '1234fewwf'; // Replace with an actual user ID

    const response = await request(app).put(`/update/${userId}`).send(UpdateUser);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ status: 'Error with updating data' });
    expect(mockFindByIdAndUpdateWithError).toHaveBeenCalledWith(userId, UpdateUser, { new: true });
  });
});
