import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from "./EventsPage";
import ProgramsPage from "./ProgramsPage";
// import Home from "./Home";
// import About from "./About";
// import Login from "./Login";
// import NavBar from "./NavBar";


const App = () => {
    return (
        <Router>
        {/* <NavBar/> */}
        <Routes>
            {/* <Route exact path="/"  element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route> */}
            <Route path="/events" element={<EventsPage />} ></Route>
            <Route path="/programs" element={<ProgramsPage />} ></Route>
        </Routes>
        </Router>
      );
}
 
export default App;