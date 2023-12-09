import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const PersonalityComponent = ({ personality }) => {
  return (
    <div className="personality-container">
      <h2>Personality</h2>
      <h3>{personality}</h3>
    </div>
  );
};

export default PersonalityComponent;
