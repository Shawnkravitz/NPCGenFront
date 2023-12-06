import React from 'react';
import './DescriptionComponent.css'; // Assuming you have a CSS file for styling

const DescriptionComponent = ({ description }) => {
  return (
    <div className="description-container">
      <h2>Description</h2>
      <h3>{description}</h3>
    </div>
  );
};

export default DescriptionComponent;
