import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@popperjs/core';





function App() {
  // const [error, setError] = useState(null);
  // const baseUrl = "http://localhost:8080/signup";

  // useEffect(() => {
  //   axios.get(baseUrl)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     setError(error);
  //   })
  // }, []);

  // if (error) return `Error: ${error.message}`;
  
  return (
    <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
