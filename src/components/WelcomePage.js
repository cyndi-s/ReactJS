import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const { username } = location.state || {};

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Welcome {username}</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WelcomePage;
