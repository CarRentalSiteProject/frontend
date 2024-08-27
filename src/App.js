import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@popperjs/core';
import './styles/*';

function App() {
  const [error, setError] = useState(null);
  const baseUrl = "http://localhost:8080/carrent/test_api";

  useEffect(() => {
    axios.get(baseUrl)
    .then((response) => {
      console.log(response);
    })
    .catch(error => {
      setError(error);
    })
  }, []);

  if (error) return `Error: ${error.message}`;
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
