import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [description, setDescription] = useState({
    id: null,
    greeting: '',
  });

  // Function to update the description
  const fetchDescription = (name = "World") => {
    axios.get(`http://localhost:8081/greeting`, { params: { name } })
      .then(response => {
        // Update the description in the state
        setDescription({
          id: response.data.id,
          greeting: response.data.content,
        });
      })
      .catch(error => {
        console.error('There was a problem with the Axios operation:', error);
      });
  };

  // This function will be called when "Generate Character" button is clicked
  const handleGenerateCharacter = () => {
    // Here you can call fetchDescription with a specific name or just leave it to default to "World"
    fetchDescription(); // Or pass a specific character name
  };

  return (
    <div className="app">
      <button onClick={handleGenerateCharacter}>Generate Character</button>
      <div className="npc-display">
        <div className="description">
          <h2>Character Name:</h2> <p>{description.greeting}</p>
          <p><strong>ID:</strong> {description.id}</p>
          {/* Adding the Generate Character button */}
          
        </div>
        <div className="description">
          <h2>Description</h2>
          <p><strong>ID:</strong> {description.id}</p>
          <p><strong>Greeting:</strong> {description.greeting}</p>
          {/* Adding the Generate Character button */}
          
        </div>
        <div className="description">
          <h2>Personality</h2>
          <p><strong>ID:</strong> {description.id}</p>
          <p><strong>Greeting:</strong> {description.greeting}</p>
          {/* Adding the Generate Character button */}
          
        </div>
        {/* ...additional sections like Personality, Abilities, etc. */}
      </div>
    </div>
  );
}

export default App;
