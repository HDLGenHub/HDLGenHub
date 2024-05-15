import { describe, test } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from '../src/components/login/Login';
import { Provider } from 'react-redux';
import Store from '../../src/store/store';
import { BrowserRouter } from 'react-router-dom';


describe('Login', () => {
  // TEST 1: Client-side validation (REQUIRED)
  test('Client side validation (REQUIRED): ', async () => {
    renderLoginPage();
    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const emailError = screen.getByText('username is required.', { selector: 'span' });
      const passError = screen.getByText('Password is required.', { selector: 'span' });
      expect(emailError).toBeInTheDocument();
      expect(passError).toBeInTheDocument();
    });
  });

  // TEST 2: Invalid username, password
  test('Invalid username, password: ', async () => {
    renderLoginPage();
    const emailInput = screen.getByLabelText('username:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'Sam12_#' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const invalidMessage = screen.getByText('Invalid credentials', { selector: 'strong' });
      expect(invalidMessage).toBeInTheDocument();
    });
  });

  // TEST 3: Valid username, password
  test('Valid username, password: ', async () => {
    renderLoginPage();
    const emailInput = screen.getByLabelText('username:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'kminchelle' } });
    fireEvent.change(passwordInput, { target: { value: '0lelplR' } });
    fireEvent.click(submitButton);

    expect(emailInput.value).toBe('kminchelle');
    expect(passwordInput.value).toBe('0lelplR');

    await waitFor(() => {
      const profilePageHeading = screen.getByText('Profile pages', { selector: 'p' });
      console.log(profilePageHeading); // Debugging purposes
      expect(profilePageHeading).toBeInTheDocument();
    });
  });
});
