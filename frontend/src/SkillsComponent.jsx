import React from 'react';
import './SkillsComponent.css'; // Assuming you have a CSS file for styling

const SkillsComponent = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <p>{skills}</p>
    </div>
  );
};

export default SkillsComponent;
