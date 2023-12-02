import React from 'react';
import './NameComponent.css'; // Assuming you have a CSS file for styling

const NameComponent = ({ name }) => {
  return (
    <div className="name-container">
      <h2>Character Name</h2>
      <p>{name}</p>
    </div>
  );
};

export default NameComponent;
