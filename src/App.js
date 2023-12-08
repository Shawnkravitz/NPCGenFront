import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DescriptionComponent from './DescriptionComponent';
import PersonalityComponent from './PersonalityComponent';
import SkillsComponent from './SkillsComponent';
import StatsComponent from './StatsComponent';
import NameComponent from './NameComponent';
import ClassComponent from './ClassComponent';

function App() {
  const [description, setDescription] = useState({
    greeting: '',
    name: '',
    className: '',
    description: '',
    personality: '',
    stats: '',
    skills: '',
  });

// Function to update the description
const fetchDescription = (name = "World") => {
  // First, get the class name
  axios.get(`https://www.api.npcworldgenerator.com/class`)
    .then(classResponse => {
      // Extract the className from the classResponse

      const classNameConst = classResponse.data.content; // Make sure this matches the structure of your response
      console.log("Full class response:", classResponse); // Log the full response

      console.log("Received class name:", classNameConst);
      // Now that you have the className, make the other requests in parallel
      return Promise.all([
        axios.get(`https://www.api.npcworldgenerator.com/name`, { params: { name } }),
        axios.get(`https://www.api.npcworldgenerator.com/description`, { params: { className: classNameConst } }), // Corrected the params object
        axios.get(`https://www.api.npcworldgenerator.com/stats`),
        axios.get(`https://www.api.npcworldgenerator.com/personality`, { params: { className: classNameConst } }),
        axios.get(`https://www.api.npcworldgenerator.com/skills`, { params: { className: classNameConst } })
      ]).then(responses => {
        // Handle the responses from greeting, description, and stats
        const [greetingResponse, descriptionResponse, statsResponse, personalityResponse, 
        skillsResponse] = responses;

        // Now set the state once with all the new data
        setDescription(prevDescription => ({
          ...prevDescription, // Spread the existing state to preserve other properties
          name: greetingResponse.data.content,
          description: descriptionResponse.data.content,
          stats: statsResponse.data.content,
          personality: personalityResponse.data.content,
          skills: skillsResponse.data.content,
          className: classNameConst, // Set the className from the initial request; no .content here unless your data structure requires it
          // personality and skills should be updated similarly when their respective endpoints are available
        }));
      });
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
          <ClassComponent className={description.className} />
          <DescriptionComponent description={description.description} />
          <PersonalityComponent personality={description.personality} />
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
