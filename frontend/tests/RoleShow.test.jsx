// RoleShow.test.js

import { render, screen } from '@testing-library/react';
import RoleShow from '../src/components/RoleShow';

describe('RoleShow component', () => {
  it('should display user role when data is available', () => {
    const user = { role: 'Admin' };
    localStorage.setItem('user', JSON.stringify(user));

    render(<RoleShow />);

    expect(screen.getByText(/Admin/)).toBeInTheDocument();
  });

  it('should display a message when user data is not found or not loaded', () => {
    localStorage.removeItem('user');

    render(<RoleShow />);

    expect(screen.getByText(/User data not found or not loaded yet/)).toBeInTheDocument();
  });
});
