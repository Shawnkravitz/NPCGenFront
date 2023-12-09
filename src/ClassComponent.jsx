import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const ClassComponent = ({ className }) => {
  return (
    <div className="class-container">
      <h2>Class</h2>
      <h3>{className}</h3>
    </div>
  );
};

export default ClassComponent;
