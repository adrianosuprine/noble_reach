//I just strated coding. I will start pushing from now
import React, { useState } from 'react';

// Separate component for the Card Form
const CardForm = ({ onClose }) => {
  // Add your logic for handling card details and processing the payment

  return (
    <div>
      <h3>Card Payment Form</h3>
      {/* Add your form elements here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Integration = () => {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const handleDonationClick = () => {
    setShowPaymentMethods(true);
  };

  const handlePaymentMethodClick = (method) => {
    if (method === 'Card') {
      setShowCardForm(true);
    } else {
      console.log(`Selected payment method: ${method}`);
      // You can add logic here to handle other payment methods
    }
  };

  const handleCloseCardForm = () => {
    setShowCardForm(false);
  };

  return (
    <div>
      <button onClick={handleDonationClick}>Donate</button>
      {showPaymentMethods && (
        <div>
          <h3>Select Payment Method:</h3>
          <div>
            <button onClick={() => handlePaymentMethodClick('Card')}>Card</button>
            <button onClick={() => handlePaymentMethodClick('Paypal')}>Paypal</button>
            <button onClick={() => handlePaymentMethodClick('Mpesa')}>Mpesa</button>
            <button onClick={() => handlePaymentMethodClick('Crypto')}>Crypto</button>
            <button onClick={() => handlePaymentMethodClick('Airtel Money')}>Airtel Money</button>
            <button onClick={() => handlePaymentMethodClick('Google Pay')}>Google Pay</button>
          </div>
        </div>
      )}
      {showCardForm && <CardForm onClose={handleCloseCardForm} />}
    </div>
  );
};

export default Integration;
``