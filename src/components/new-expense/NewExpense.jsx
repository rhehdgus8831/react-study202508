import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    const formComponent = <ExpenseForm onAdd={onSave} />;
    const buttonComponent = <button>새로운 지출 추가히기</button>


    return (
        <div className='new-expense'>
            {buttonComponent}
        </div>
    );
};

export default NewExpense;