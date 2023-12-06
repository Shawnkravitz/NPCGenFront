import React from 'react';
import './NameComponent.css'; // Assuming you have a CSS file for styling

const NameComponent = ({ name }) => {
  return (
    <div className="name-container">
      <h2>Character Name</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default NameComponent;
