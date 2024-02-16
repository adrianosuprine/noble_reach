import React, { useState } from 'react';

const CommentsForm = () => {
  
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {  comment };

    try {
      const response = await fetch('src/Components/comments.json', {
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
   
    setComment('');
  };

  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentsForm;