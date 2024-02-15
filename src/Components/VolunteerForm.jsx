import React, { useState } from 'react';

const VolunteerForm = ({ onClose, onSubmit }) => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [availability, setAvailability] = useState('');
  const [preferences, setPreferences] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, availability, preferences };
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Volunteer Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Availability:</label>
        <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} />

        <label>Preferences:</label>
        <textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
