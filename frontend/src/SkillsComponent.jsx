import React from 'react';
import './SkillsComponent.css'; // Assuming you have a CSS file for styling

const SkillsComponent = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <h3>{skills}</h3>
    </div>
  );
};

export default SkillsComponent;
