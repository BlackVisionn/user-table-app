// src/components/UserTable.js
import React, { useState, useEffect } from 'react';
import '../styles.css';

const UserTable = ({ users = [], onUserClick }) => {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  useEffect(() => {
    setSortedUsers(users);
  }, [users]);

  const onSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setSortedUsers(sortedData);
    setSortConfig({ key, direction });
  };

  const getFullName = (user) => {
    return `${user.firstName} ${user.maidenName} ${user.lastName}`;
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort('firstName')}>ФИО</th>
          <th onClick={() => onSort('age')}>Возраст</th>
          <th onClick={() => onSort('gender')}>Пол</th>
          <th>Номер телефона</th>
          <th onClick={() => onSort('address.city')}>Адрес</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <tr key={user.id} onClick={() => onUserClick(user)}>
            <td>{getFullName(user)}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{`${user.address.city}, ${user.address.street}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
