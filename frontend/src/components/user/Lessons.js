import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Lessons.css';  // Add styles for the Lessons page

const Lessons = () => {
  return (
    <div className="lessons-container">
      <div className="lessons-cards">
        {/* Card 1 */}
        <Link to="/lesson/1" className="lesson-card">
          <h3>Lesson 1</h3>
          <p>Intro to Learning</p>
        </Link>
        {/* Card 2 */}
        <Link to="/lesson/2" className="lesson-card">
          <h3>Lesson 2</h3>
          <p>Advanced Topics</p>
        </Link>
        {/* Card 3 */}
        <Link to="/lesson/3" className="lesson-card">
          <h3>Lesson 3</h3>
          <p>Interactive Activities</p>
        </Link>
        {/* Card 4 */}
        <Link to="/lesson/4" className="lesson-card">
          <h3>Lesson 4</h3>
          <p>Fun with Games</p>
        </Link>
        {/* Card 5 */}
        <Link to="/lesson/5" className="lesson-card">
          <h3>Lesson 5</h3>
          <p>Final Exam</p>
        </Link>
      </div>
    </div>
  );
};

export default Lessons;

