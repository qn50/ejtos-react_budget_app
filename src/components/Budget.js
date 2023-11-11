import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,currency, dispatch } = useContext(AppContext);

    const handleInputChange = (e) => {
        const newBudget = parseInt(e.target.value, 10);
        if (!isNaN(newBudget) && newBudget <= 20000) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total += item.cost);
            }, 0);

            if (newBudget >= totalExpenses) {
                dispatch({ type: 'SET_BUDGET', payload: newBudget });
            } else {
                alert("You cannot reduce the budget value lower than the spending.");
            }
        } else {
            alert("The value cannot be more than 20000.");
        }
    };

   
    return (
        <div className='alert alert-secondary'>
            <label>
                Budget: {currency}
                <input
                    type='number'
                    value={budget}
                    onChange={handleInputChange}
                />
               
            </label>
        </div>
    );
};

export default Budget;