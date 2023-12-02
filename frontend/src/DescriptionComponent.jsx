import React from 'react';
import './DescriptionComponent.css'; // Assuming you have a CSS file for styling

const DescriptionComponent = ({ description }) => {
  return (
    <div className="description-container">
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionComponent;
