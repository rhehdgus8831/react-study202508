import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAdd}) => {

    const [todoText, setTodoText] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
        open: openStyle,
    } = styles;

    const changeHandler = e => setTodoText(e.target.value);


    const submitHandler = e => {
        e.preventDefault();

        console.log(todoText);

        if (!todoText.trim()) {
            return;
        }

        onAdd(todoText);
        setTodoText('');
    }

    const inputChangeHandler = () => {
    setIsOpen(prev => !prev);
    }


    return (
        <>
        {isOpen && <div className={wrapper}>
                <form className={insertForm}
                      onSubmit={submitHandler}>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        value={todoText}
                        onChange={changeHandler}
                    />
                </form>
            </div>}

            <button
                className={`${insertBtn} ${insertBtn} ${isOpen ? openStyle : ''}`}
                onClick={inputChangeHandler}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
