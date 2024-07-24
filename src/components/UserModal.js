// src/components/UserModal.js
import React from 'react';
import '../styles.css';

const UserModal = ({ user, onClose }) => {
  const getFullName = (user) => {
    return `${user.firstName} ${user.maidenName} ${user.lastName}`;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{getFullName(user)}</h2>
        <p>Возраст: {user.age}</p>
        <p>Адрес: {`${user.address.city}, ${user.address.street}`}</p>
        <p>Рост: {user.height} см</p>
        <p>Вес: {user.weight} кг</p>
        <p>Телефон: {user.phone}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserModal;
