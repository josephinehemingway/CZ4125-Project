import React from "react";
import "antd/dist/antd.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Footer from "./components/reusable/Footer";

function App() {
    return (
        <Router>
            {/*<Navbar/>*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/explore/:country/:destination"
                    element={<Explore />}
                />
                {/*<Route path='/itinerary/:destination' element={<Itinerary/>} />*/}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
