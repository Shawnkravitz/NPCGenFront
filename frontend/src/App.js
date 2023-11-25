import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

 
function App({ name = "World" }) {
  const [data, setData] = useState({ id: null, content: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get(`http://localhost:8081/greeting`, { params: { name } })
          .then(response => {
              setData(response.data);
              setIsLoading(false);
          })
          .catch(error => {
              console.error('There was a problem with the Axios operation:', error);
              setError(error);
              setIsLoading(false);
          });
  }, [name]); // Dependency array with 'name' means this effect will rerun when 'name' changes

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  return (
      <div>
          <p>ID: {data.id}</p>
          <p>Greeting: {data.content}</p>
      </div>
  );
}

export default App;