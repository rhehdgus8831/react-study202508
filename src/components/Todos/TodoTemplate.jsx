import React, {useState} from 'react';
import TodoHeader from './TodoHeader.jsx';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import todoItem from './TodoItem.jsx';

const TodoTemplate = () => {

    const todo = [
        {
        id : Math.random().toString() ,
        boolean : false,
        data : "메롱"
        }
    ];

    const [todoInput, setTodoInput] = useState(todo);

    const addHandler = (todoText) => {

        setTodoInput(prev => [...prev,{
            id : Math.random().toString() ,
            boolean : false,
            data : todoText
        }]);
    }

    const deleteHandler = (id) => {
        setTodoInput(todoInput.filter(todoItem => todoItem.id !== id))
    }

    const checkHandler = (id) => {
        setTodoInput(todoInput.map(todoItem => todoItem.id === id ? {...todoItem, boolean : !todoItem.boolean} : todoItem))
    }



    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader todo={todoInput}/>
            <TodoMain todo={todoInput} onDelete={deleteHandler} onCheck={checkHandler}/>
            <TodoInput onAdd={addHandler}/>
        </div>
    );
};

export default TodoTemplate;