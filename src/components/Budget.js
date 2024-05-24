import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currentCurrency, setCurrentCurrency] = useState(currency); // State to store the current currency symbol

    useEffect(() => {
        setCurrentCurrency(currency); // Update current currency symbol when currency changes
    }, [currency]);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        const totalSpending = expenses.reduce((total, expense) => {
            return total + expense.cost;
        }, 0);

        if (newBudgetValue > 20000) {
            alert(`The value cannot exceed the upper limit of ${currentCurrency}20000.`);
        } else if (newBudgetValue < totalSpending) {
            alert(`You cannot reduce the budget value lower than the spending: ${currentCurrency}${totalSpending}`);
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            setNewBudget(newBudgetValue);
        }
    }

    return (
        <div className='alert alert-secondary'>
            Budget: {currentCurrency}{' '}
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
            />
        </div>
    );
};

export default Budget;
