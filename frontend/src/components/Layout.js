import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaQuestionCircle, FaGamepad, FaUserCircle } from 'react-icons/fa';
import './Layout.css';
import logo from '../assets/bgfull.png';
import { Outlet } from 'react-router-dom'; // Ensure Outlet is imported to render content

const Layout = ({ isAdmin }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Toggle the profile dropdown visibility
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="layout-container">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span>Kids Learning</span>
        </div>
        <ul>
          {/* Common Routes */}
          <li><Link to="/home"><FaHome /> Homepage</Link></li>

          {/* Admin Routes */}
          {isAdmin && (
            <>
              <li><Link to="/lessons"><FaBook /> Lessons</Link></li>
              <li><Link to="/quizzes"><FaQuestionCircle /> Quizzes</Link></li>
              <li><Link to="/usersdashboard"><FaGamepad /> Users Dashboard</Link></li>
            </>
          )}

          {/* User Routes */}
          {!isAdmin && (
            <>
              <li><Link to="/lessons"><FaBook /> Lessons</Link></li>
              <li><Link to="/quizzes"><FaQuestionCircle /> Quizzes</Link></li>
              <li><Link to="/parentdashboard"><FaGamepad /> Parent Dashboard</Link></li>
            </>
          )}

          {/* Profile Icon and Dropdown */}
          <li className="profile-icon" onClick={toggleProfileMenu}>
            <FaUserCircle size={30} />
            <span>Profile</span>
            {/* Profile Dropdown */}
            {isProfileMenuOpen && (
              <div className="profile-dropdown">
                <ul>
                  <li><Link to="/achievements">Achievements</Link></li>
                  <li><Link to="/level">Level</Link></li>
                  <li><button onClick={() => alert('Logged out!')}>Logout</button></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
