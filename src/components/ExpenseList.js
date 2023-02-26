import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        {id: 1231232, name: "Shopping", cost: 100},
        {id: 1231232, name: "Rent", cost: 500},
        {id: 1231232, name: "Electricity", cost: 70},
        {id: 1231232, name: "Fuel", cost: 50},
        {id: 1231232, name: "Pet Care", cost: 20},
    ];

    return (
        <ul className='list-group '>
            {expenses.map((expense) => (
                <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
            ))}
        </ul>
    )
};

export default ExpenseList