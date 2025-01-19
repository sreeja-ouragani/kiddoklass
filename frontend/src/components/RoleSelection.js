import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = ({ setIsAdmin }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setIsAdmin(role === 'admin'); // Set admin state
    navigate('/home'); // Navigate to home after role selection
  };

  return (
    <div className="role-selection-container">
      <h1>Welcome to Kids Learning</h1>
      <p>Please select your role to proceed:</p>
      <div className="role-buttons">
        <button onClick={() => handleRoleSelection('admin')}>Admin</button>
        <button onClick={() => handleRoleSelection('user')}>User</button>
      </div>
    </div>
  );
};

export default RoleSelection;
