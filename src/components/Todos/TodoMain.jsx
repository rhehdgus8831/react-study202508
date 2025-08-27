import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({todo, onDelete, onCheck}) => {



    return (
        <ul className={styles['todo-list']}>

            {todo.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck}/>)}

        </ul>
    );
};

export default TodoMain;
