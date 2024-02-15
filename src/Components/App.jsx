// App.jsx
import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import CommentForm from './CommentForm';

const App = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
  };

  const handleCloseForm = () => {
    setShowVolunteerForm(false);
  };

  const handleVolunteerFormSubmit = (formData) => {
    console.log('Volunteer form submitted:', formData);
    setShowVolunteerForm(false);
  };

  return (
    <div>
      <h1>Your Application</h1>

      <button onClick={handleVolunteerClick}>Volunteer</button>

      {showVolunteerForm && (
        <VolunteerForm onClose={handleCloseForm} onSubmit={handleVolunteerFormSubmit} />
      )}

      <CommentForm />
    </div>
  );
};

export default App;