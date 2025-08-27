import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({todo, onDelete, onCheck}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle , active, finish } = styles;




    return (
        <li className={itemStyle} >
            <div className={ `${checkCircle} ${todo.boolean ? active  : ''}`}
                 onClick={()=> onCheck(todo.id)}
            >
                <MdDone />
            </div>
            <span className= {`${text} ${todo.boolean ? finish : ''}` }>{todo.data}</span>
            <div className={remove} onClick={() => onDelete(todo.id)}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
