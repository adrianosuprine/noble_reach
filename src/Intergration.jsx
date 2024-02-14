//I just strated coding. I will start pushing from now
import React, { useState } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from './Checkout';


const initialOptions = {
  "client-id": "AXjib-AnJ12dQKJbUjfZHyGafofLA_Daegy8dISqfclfBKWw6pE8YWpGw4y4xfvoA1vBYCnkRgNPqBDq",
  currency: "USD",
  intent: "capture",
};


const Integration = () => {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);

  const handleDonationClick = () => {
    setShowPaymentMethods(prevState => !prevState); // Toggle the state
  };

  
  const handleCloseCardForm = () => {
    setShowCardForm(false);
  };

  return (
    <div>
      <button onClick={handleDonationClick}>Donate ❤</button>
      {showPaymentMethods && (
         <PayPalScriptProvider options={initialOptions}>
          <Checkout/>
        </PayPalScriptProvider>
      )}
      {showCardForm && <CardForm onClose={handleCloseCardForm} />}
    </div>
  );
};

export default Integration;
``