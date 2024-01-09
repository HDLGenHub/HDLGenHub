import React, { useState, useEffect } from 'react';

const PathShow = () => {
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
                {user.role}
              </div>
      ) : (
        <p>User data not found or not loaded yet.</p>
      )}
    </div>
  );
};

export default PathShow;


