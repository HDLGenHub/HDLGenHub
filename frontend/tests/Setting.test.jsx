import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Setting from '../src/components/setting/setting';
import axios from 'axios';

jest.mock('axios');

describe('Setting component', () => {
  test('renders teachers and students correctly', async () => {
    const mockTeachers = [
      { id: 1, name: 'Teacher 1', email: 'teacher1@example.com', coursesCreated: 3 },
      { id: 2, name: 'Teacher 2', email: 'teacher2@example.com', coursesCreated: 5 },
    ];

    const mockStudents = [
      { id: 1, name: 'Student 1', email: 'student1@example.com', enrolledCourses: [1, 2, 3] },
      { id: 2, name: 'Student 2', email: 'student2@example.com', enrolledCourses: [4, 5] },
    ];

    axios.get.mockResolvedValueOnce({ data: [...mockTeachers, ...mockStudents] });

    render(<Setting />);

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      const teacherNames = screen.getAllByText(/Teacher/i);
      const studentNames = screen.getAllByText(/Student/i);
      expect(teacherNames.length).toBe(mockTeachers.length);
      expect(studentNames.length).toBe(mockStudents.length);
    });

    // Check if teacher and student names are rendered correctly
    mockTeachers.forEach(teacher => {
      expect(screen.getByText(teacher.name)).toBeInTheDocument();
    });

    mockStudents.forEach(student => {
      expect(screen.getByText(student.name)).toBeInTheDocument();

    });
 });
});