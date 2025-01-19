// src/components/admin/Lessons.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Lessons.css';

const LessonsAdmin = () => {
  return (
    <div className="lessons-container">
      <div className="lessons-cards">
        {/* Admin Lesson Cards */}
        <Link to="/lesson/1" className="lesson-card">
          <h3>Lesson 1</h3>
          <p>Intro to Learning</p>
        </Link>
        <Link to="/lesson/2" className="lesson-card">
          <h3>Lesson 2</h3>
          <p>Advanced Topics</p>
        </Link>
        <Link to="/lesson/3" className="lesson-card">
          <h3>Lesson 3</h3>
          <p>Interactive Activities</p>
        </Link>
        {/* Additional Lesson Cards */}
      </div>
      <button>ADD Lessons</button>
    </div>
  );
};

export default LessonsAdmin;
