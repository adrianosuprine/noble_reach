
import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
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

export default CommentForm;
