import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        dispatch({ type: 'SET_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='alert alert-info'>
            <label>
                Currency:
                <select value={currency} onChange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </label>
        </div>
    );
};

export default CurrencySelector;