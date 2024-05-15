// courseRoutes.test.js

const app = require('../server'); // Your Express app
const mongoose = require('mongoose'); // Import mongoose (if not already imported)
const Course = require('../models/ActiveCourse'); // Your Course model

describe('GET /courses/:id', () => {
  it('should return a course when a valid ID is provided', async () => {
    // Create a mock course
    const mockCourse = new Course({
      title: 'Test Course',
      description: 'A test course',
      instructor: ObjectId('65a786a21bce13d4853ea728'), // Use a valid ObjectId
      materials: null, // Use valid ObjectId values
      duration: 60,
      enrollmentStatus: 'open',
    });
    await mockCourse.save();

    // Make a request to get the course by its ID
    
    const response = await request(app).get(`/courses/${mockCourse._id}`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body.title).toBe(mockCourse.title);
    // Add more assertions as needed
  });

  it('should return a 404 error when an invalid ID is provided', async () => {
    // Make a request with an invalid ID
    const response = await request(app).get('/courses/invalid-id');

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Course not found');
  });
});
