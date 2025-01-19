import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';  // Layout for navigation and sidebar
import RoleSelection from './components/RoleSelection';  // Role selection screen
import Home from './components/Home';  // Home page
import Lessons from './components/user/Lessons';  // User Lessons
import Quizzes from './components/user/Quizzes';  // User Quizzes
import ParentDashboard from './components/user/ParentsDashboard';  // User Parent Dashboard
import AdminLessons from './components/admin/Lessons';  // Admin Lessons
import AdminQuizzes from './components/admin/Quizzes';  // Admin Quizzes
import UsersDashboard from './components/admin/UsersDashboard';  // Admin Dashboard
import './App.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // State to toggle between Admin and User

  return (
    <Router>
      <Routes>
        {/* Role Selection Page */}
        <Route path="/" element={<RoleSelection setIsAdmin={setIsAdmin} />} />
        {/* Shared Layout */}
        <Route path="/" element={<Layout isAdmin={isAdmin} />}>
          {/* Shared Routes */}
          <Route path="home" element={<Home />} />
          
          {/* User Routes */}
          {!isAdmin && (
            <>
              <Route path="lessons" element={<Lessons />} />
              <Route path="quizzes" element={<Quizzes />} />
              <Route path="parentdashboard" element={<ParentDashboard />} />
            </>
          )}

          {/* Admin Routes */}
          {isAdmin && (
            <>
              <Route path="lessons" element={<AdminLessons />} />
              <Route path="quizzes" element={<AdminQuizzes />} />
              <Route path="usersdashboard" element={<UsersDashboard />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
