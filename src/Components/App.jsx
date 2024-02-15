import { Routes, Route } from "react-router-dom";
import "./App.css";
import Integration from "./Intergration";
import LandingPage from "./LandingPage";

function App() {
  // All routes placed here.

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<Integration />} />
      </Routes>
    </>
  );
}

export default App;
