
import { Routes, Route } from "react-router-dom";

import Integration from "./Components/Intergration";
import LandingPage from "./Components/LandingPage";
import EventsPage from "./Components/EventsPage";
import ProgramsPage from "./Components/ProgramsPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import VolunteerForm from "./Components/VolunteerForm";


function App() {
  // All routes placed here.

  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/donate" element={<Integration />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/volunteers" element={ <VolunteerForm/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
