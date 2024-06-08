// App.js
import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Services from './Services';
import Contact from './Contact';
import './css/App.css'; // Import the CSS file
import Testimonies from './Testimonies';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/Home":
      Component = Homepage
      break
    case "/Services":
      Component = Services
      break
    case "/Contact":
      Component = Contact
      break
    case "/Testimonies":
      Component = Testimonies
      break
    default: 
      Component = Homepage      
  }
  
  
  return (
    <div>
      <Navbar />
      <Component />
    </div>
  );
}

export default App;
