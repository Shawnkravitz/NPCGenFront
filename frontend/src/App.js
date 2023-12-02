import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DescriptionComponent from './DescriptionComponent';
import PersonalityComponent from './PersonalityComponent';
import SkillsComponent from './SkillsComponent';
import StatsComponent from './StatsComponent';
import NameComponent from './NameComponent';

function App() {
  const [description, setDescription] = useState({
    greeting: '',
    name: '',
    description: '',
    personality: '',
    stats: '',
    skills: '',
  });

  // Function to update the description
  const fetchDescription = (name = "World") => {
    // You can use Promise.all to handle multiple requests
  Promise.all([
    axios.get(`http://localhost:8081/greeting`, { params: { name } }),
    axios.get(`http://localhost:8081/description`),
    axios.get(`http://localhost:8081/stats`),
  ])
  .then(responses => {
    const [greetingResponse, descriptionResponse, statsResponse] = responses;

    // Now set the state once with all the new data
    setDescription(prevDescription => ({
      ...prevDescription, // Spread the existing state to preserve other properties
      name: greetingResponse.data.content, // You might want to adjust this, as you probably don't want the name to be the content of the greeting
      description: descriptionResponse.data.content,
      stats: statsResponse.data.content,
      // personality, stats, and skills should be updated similarly when their respective endpoints are available
    }));
  })
  .catch(error => {
    console.error('There was a problem with the Axios operations:', error);
  });
  };

  // This function will be called when "Generate Character" button is clicked
  const handleGenerateCharacter = () => {
    // Here you can call fetchDescription with a specific name or just leave it to default to "World"
    fetchDescription(); // Or pass a specific character name
  };

  return (
    <div className="app">
      <div className="button-container">
        <button className="button-style" onClick={handleGenerateCharacter}>Generate Character</button>
      </div>
      <div className="npc-display">
        <div className="description">
          <NameComponent name={description.name} />
          <DescriptionComponent description={description.description} />
          <PersonalityComponent traits={description.personality} />
          <StatsComponent stats={description.stats} />
          <SkillsComponent skills={description.skills} />
          {/* Adding the Generate Character button */}
          
        </div>
        {/* ...additional sections like Personality, Abilities, etc. */}
      </div>
    </div>
  );
}

export default App;
