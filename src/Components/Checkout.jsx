import React, { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import AmountInputForm from './AmountInputForm';

const Checkout = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [submittedAmount, setSubmittedAmount] = useState(null);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const handleAmountSubmit = (amount) => {
        setSubmittedAmount(amount);
    }

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: submittedAmount,
                        currency_code: currency, // Set the currency code here
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Thank You ${name} For Your Donation`);
        });
    }

    return (
        <div className="checkout">
            <AmountInputForm onAmountSubmit={handleAmountSubmit} />
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                        <option value="KSH">💵 KSH</option>
                    </select>
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default Checkout;
