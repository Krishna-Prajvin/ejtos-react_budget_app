import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencyDropdown.css'; // Ensure correct path to CSS file and import

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }

    return (
        <div className="currency-dropdown-container">
            <label htmlFor="currency" className="currency-label">Currency: </label>
            <select 
                id="currency"
                value={currency} 
                onChange={handleCurrencyChange}
                className="currency-dropdown-select"
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
