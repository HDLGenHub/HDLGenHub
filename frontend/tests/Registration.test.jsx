// Registration.test.js

import { render, fireEvent } from '@testing-library/react';
import { expect } from 'vitest'; 

import Registration from '../src/components/registration/Registration';

describe('Registration Component', () => {
  it('should handle registration successfully', async () => {
    // Mock axios.post to simulate successful registration
    const mockPost = jest.fn(() => Promise.resolve({ data: 'User registered successfully' }));
    jest.mock('axios', () => ({
      post: mockPost,
    }));

    const { getByLabelText, getByText } = render(<Registration />);

    // Fill in form fields
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@gmail.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: '123' } });
    fireEvent.change(getByLabelText('Solid'), { target: { value: 'EG/2020/3594' } });
    fireEvent.change(getByLabelText('Age'), { target: { value: '23' } })
    fireEvent.change(getByLabelText('Gender'), { target: { value: 'Male' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'student' } });

    // Submit the form
    fireEvent.click(getByText('Register'));

    // Check if registration success message is displayed
    expect(getByText('User is registered successfully')).toBeInTheDocument();
  });

  it('should handle registration error', async () => {
    // Mock axios.post to simulate registration error
    const mockPostWithError = jest.fn(() => Promise.reject(new Error('Registration failed')));
    jest.mock('axios', () => ({
      post: mockPostWithError,
    }));

    const { getByLabelText, getByText } = render(<Registration />);

    // Fill in form fields
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@gmail.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: '123' } });
    fireEvent.change(getByLabelText('Solid'), { target: { value: 'EG/2020/3594' } });
    fireEvent.change(getByLabelText('Age'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Gender'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Role'), { target: { value: 'student' } });


    // Submit the form
    fireEvent.click(getByText('Register'));

    // Check if error message is displayed
    expect(getByText('Error registering user')).toBeInTheDocument();
  });
});
