import { Routes, Route } from "react-router-dom";
import "./App.css";
import Integration from "./Intergration";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  // All routes placed here.

  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<Integration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
