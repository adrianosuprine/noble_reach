import { Routes, Route } from "react-router-dom";

import Integration from "./Intergration";
import LandingPage from "./LandingPage";
import EventsPage from "./EventsPage";
import ProgramsPage from "./ProgramsPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CommentsForm from './CommentsForm'
import VolunteerForm from './VolunteerForm'
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
        <Route path="/comments" element={<CommentsForm />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
