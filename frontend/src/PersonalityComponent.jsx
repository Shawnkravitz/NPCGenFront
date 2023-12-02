import React from 'react';
import './PersonalityComponent.css'; // Assuming you have a CSS file for styling

const PersonalityComponent = ({ personality }) => {
  return (
    <div className="personality-container">
      <h2>Personality</h2>
      <p>{personality}</p>
    </div>
  );
};

export default PersonalityComponent;
