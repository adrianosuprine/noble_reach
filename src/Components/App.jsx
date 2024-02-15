// App.jsx
import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';

const App = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
  };

  const handleCloseForm = () => {
    setShowVolunteerForm(false);
  };

  const handleVolunteerFormSubmit = (formData) => {
    // Handle the volunteer form submission (e.g., send data to the server)
    console.log('Volunteer form submitted:', formData);
    // Close the form
    setShowVolunteerForm(false);
  };

  return (
    <div>
      <h1>Your Application</h1>

      <button onClick={handleVolunteerClick}>Volunteer</button>

      {showVolunteerForm && (
        <VolunteerForm onClose={handleCloseForm} onSubmit={handleVolunteerFormSubmit} />
      )}
    </div>
  );
};

export default App;
