import React, { useState } from 'react';

const VolunteerForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [availability, setAvailability] = useState(''); // Added state variable
  const [preferences, setPreferences] = useState(''); // Added state variable
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phoneNumber, availability, preferences, message };

    try {
      const response = await fetch('src/Components/volunteers.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    }

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAvailability('');
    setPreferences('');
    setMessage('');

    // Close the form
    onClose();
  };

  return (
    <div>
      <h2>Volunteer Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

        <label>Availability:</label>
        <input type="text" value={availability} onChange={(e) => setAvailability(e.target.value)} />

        <label>Preferences:</label>
        <textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
