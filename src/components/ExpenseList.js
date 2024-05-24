import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);

    const changeAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>£{expense.cost}</td>
                        <td>
                            <button 
                                style={{
                                    borderRadius: '50%',
        backgroundColor: 'green',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        width: '30px', // Adjust the width and height as needed
        height: '30px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
                                }}
                                onClick={() => changeAllocation(expense.name, 10)}
                            >
                                +
                            </button>
                        </td>
                        <td>
                        <button 
    style={{
        borderRadius: '50%',
        backgroundColor: 'red',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        width: '30px', // Adjust the width and height as needed
        height: '30px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
    }}


                                onClick={() => changeAllocation(expense.name, -10)}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <ExpenseItem id={expense.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
