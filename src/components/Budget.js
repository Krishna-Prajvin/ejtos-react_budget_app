import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        dispatch({ type: 'SET_BUDGET', payload: parseInt(newBudgetValue) });
        setNewBudget(newBudgetValue);
    }
    return (
        <div className='alert alert-secondary'>
            Budget: £ {' '}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
