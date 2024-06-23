import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Coursecard from './coursecard';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the necessary modules
jest.mock('axios');
jest.mock('../coursecomponent/coursecomponent', () => ({ id }) => <div>Coursecomponent {id}</div>);

describe('Coursecard Component', () => {
    const mockCourseData = {
        name: 'Test Course',
        description: 'This is a test course',
        coverimage: 'http://test.com/image.jpg',
    };

    const mockCourseComponents = [
        { _id: '1' },
        { _id: '2' },
    ];

    beforeEach(() => {
        axios.get.mockImplementation((url) => {
            if (url.includes('/Coursecomponent/course/')) {
                return Promise.resolve({ data: mockCourseComponents });
            } else if (url.includes('/Course/')) {
                return Promise.resolve({ data: mockCourseData });
            }
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading initially', () => {
        render(<Router><Coursecard /></Router>);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders course data correctly', async () => {
        render(<Router><Coursecard /></Router>);

        await waitFor(() => expect(screen.getByText('Test Course')).toBeInTheDocument());
        expect(screen.getByText('This is a test course')).toBeInTheDocument();
        expect(screen.getByText('Coursecomponent 1')).toBeInTheDocument();
        expect(screen.getByText('Coursecomponent 2')).toBeInTheDocument();
    });

    test('renders course components', async () => {
        render(<Router><Coursecard /></Router>);

        await waitFor(() => expect(screen.getByText('Coursecomponent 1')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Coursecomponent 2')).toBeInTheDocument());
    });
});
