import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout for navigation and sidebar
import RoleSelection from './components/RoleSelection'; // Role selection screen
import Home from './components/Home'; // Home page
import Lessons from './components/user/Lessons'; // User Lessons
import Quizzes from './components/user/Quizzes'; // User Quizzes
import AdminLessons from './components/admin/Lessons'; // Admin Lessons
import AdminQuizzes from './components/admin/Quizzes'; // Admin Quizzes
import UsersDashboard from './components/admin/UsersDashboard'; // Admin Dashboard
import UploadForm from './components/admin/UploadForm'; // Import the UploadForm component from admin folder

// New imports for quiz pages
import QuizPage from './components/user/QuizPage'; // New page for quiz content
import MatchingQuiz from './components/user/MatchingQuiz'; // Matching type quiz
import FillBlankQuiz from './components/user/FillBlankQuiz'; // Fill in the blank quiz

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

          {/* User Routes (Visible when not admin) */}
          {!isAdmin && (
            <>
              <Route path="lessons" element={<Lessons />} />
              <Route path="quizzes" element={<Quizzes />} />

              {/* Quiz route - Redirect to specific quiz page */}
              <Route path="quiz/:quizId" element={<QuizPage />} />
              {/* Adding individual quiz types */}
              <Route path="quiz/match" element={<MatchingQuiz />} />
              <Route path="quiz/fillblank" element={<FillBlankQuiz />} />
            </>
          )}

          {/* Admin Routes (Visible when admin is true) */}
          {isAdmin && (
            <>
              <Route path="lessons" element={<AdminLessons />} />
              <Route path="quizzes" element={<AdminQuizzes />} />
              <Route path="usersdashboard" element={<UsersDashboard />} />
              <Route path="upload" element={<UploadForm />} /> {/* Admin route for UploadForm */}
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
