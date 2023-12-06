import React from 'react';
import './StatsComponent.css'; // Assuming you have a CSS file for styling

const StatsComponent = ({ stats }) => {
  return (
    <div className="stats-container">
      <h2>Stats</h2>
      <h3>{stats}</h3>
    </div>
  );
};

export default StatsComponent;
