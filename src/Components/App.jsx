import { Routes, Route } from "react-router-dom";

import Integration from "./Intergration";
import LandingPage from "./LandingPage";
import EventsPage from "./EventsPage";
import ProgramsPage from "./ProgramsPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
