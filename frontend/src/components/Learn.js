import React, { useState, useEffect } from 'react';

const Learn = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      //alert(parsedUser);
    }
  }, []);

  return (
    <div>
      {user ? (
              <div>
                <h2>Welcome to the Learning Portal, {user.name}!</h2>
                <h3>User Details:</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Solid</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>{user.gender}</td>
                      <td>{user.solid}</td>
                      <td>{user.role}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
      ) : (
        <p>User data not found or not loaded yet.</p>
      )}
    </div>
  );
};

export default Learn;


