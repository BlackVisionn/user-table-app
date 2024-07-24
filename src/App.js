// src/App.js
import React, { useState, useEffect } from 'react';
import UserTable from './components/UserTable';
import SearchInput from './components/SearchInput';
import UserModal from './components/UserModal';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredUsers(users);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.users) {
          setFilteredUsers(data.users);
        } else {
          setFilteredUsers([]);
        }
      })
      .catch(error => {
        console.error('Error filtering users:', error);
        setFilteredUsers([]);
      });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <SearchInput onSearch={handleSearch} />
      <UserTable users={filteredUsers} onUserClick={handleUserClick} />
      {selectedUser && <UserModal user={selectedUser} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
