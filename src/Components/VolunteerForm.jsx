import React, { useState } from 'react';

const VolunteerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phoneNumber, message };

    try {
      const response = await fetch('http://localhost:3000/volunteers', {
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
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};

export default VolunteerForm;