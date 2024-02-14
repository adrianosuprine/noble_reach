import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Integration from './Intergration'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './App.css'


const initialOptions = {
  "client-id": "Ae5gS9dNR_4ZF2Eat_BC2Tj7ZyeSayZ3KJ8vHdEtS8qcTrLuvDJbhEW6DiqKMm1wVjy6TjDgfvsurdBQ",
  currency: "USD",
  intent: "capture",
};

function App() {
  
  // All routes placed here.

  return (
    <>
   <h1>Hello Team B.</h1> 
   <Integration/>

   <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
</PayPalScriptProvider>

    </>
  )
}

export default App
