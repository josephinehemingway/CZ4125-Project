import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      {/*<Navbar/>*/}
      <Routes>
        <Route path='/' element={<Home/>} />
        {/*<Route path='/explore/:destination' element={<Explore />} />*/}
        {/*<Route path='/itinerary/:destination' element={<Itinerary/>} />*/}
      </Routes>
    </Router>
  );
}

export default App;
