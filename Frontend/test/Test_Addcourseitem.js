// src/components/Addcourseitem.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Addcourseitem from './Addcourseitem';
import Addingvideo from '../additemsforms/addingvideo/addingvideo';
import Addingdocument from '../additemsforms/addingdocument/addingdocument';
import Addingquiz from '../additemsforms/addingquiz/addingquiz';
import Addingassignment from '../additemsforms/addingassignment/addingassignment';

// Mock the imported components
jest.mock('../additemsforms/addingvideo/addingvideo');
jest.mock('../additemsforms/addingdocument/addingdocument');
jest.mock('../additemsforms/addingquiz/addingquiz');
jest.mock('../additemsforms/addingassignment/addingassignment');

describe('Addcourseitem component', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Addingvideo.mockClear();
        Addingdocument.mockClear();
        Addingquiz.mockClear();
        Addingassignment.mockClear();
    });

    test('renders correctly and handles close button', () => {
        render(<Addcourseitem />);
        expect(screen.getByText('Select item')).toBeInTheDocument();
        
        const closeButton = screen.getByText('X');
        fireEvent.click(closeButton);
        expect(screen.queryByText('Select item')).not.toBeInTheDocument();
    });

    test('displays the correct form based on the selected value', () => {
        render(<Addcourseitem />);
        const select = screen.getByRole('combobox');
        
        fireEvent.change(select, { target: { value: 'video' } });
        expect(Addingvideo).toHaveBeenCalled();
        
        fireEvent.change(select, { target: { value: 'document' } });
        expect(Addingdocument).toHaveBeenCalled();
        
        fireEvent.change(select, { target: { value: 'quiz' } });
        expect(Addingquiz).toHaveBeenCalled();
        
        fireEvent.change(select, { target: { value: 'assignment' } });
        expect(Addingassignment).toHaveBeenCalled();
    });
});
