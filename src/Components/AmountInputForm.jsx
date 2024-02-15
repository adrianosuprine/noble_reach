import React, { useState } from 'react';

function AmountInputForm({ onAmountSubmit }) {
  const [amount, setAmount] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAmountSubmit(amount);
    setIsSubmitted(true); // Set isSubmitted to true when the form is submitted
  };

  const handleButtonClick = () => {
    setIsSubmitted(false); // Reset isSubmitted when button is clicked
    setAmount(''); // Reset amount input field
    window.location.reload(); // Reload the page
  };

  return (
    <div>
        <h3>Giving is the act of grace</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter Amount:</label><br />
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        /><br /><br />
        {isSubmitted ? (
          <button onClick={handleButtonClick}>Confirmed</button>
        ) : (
          <input type="submit" value="Confirm Amount" />
        )}
      </form>
    </div>
  );
}

export default AmountInputForm;
