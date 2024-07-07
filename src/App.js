import React from 'react';
import "./App.css";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="header-container">
        <p className="hi">
            <strong>STEM</strong>spire
          </p>
          <img src={require('./logo.jpeg')} className="header-image" alt="Logo" />
        </div>
        <p className="hii register-box">
          Register your interests to receive a special starter pack & your first 4 lessons 25% off <br></br>for a limited time only! 
        </p>
        <Contact />
      </div>
    </div>
  );
}

export default App;
