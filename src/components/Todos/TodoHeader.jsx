import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({todo }) => {

    const { day, 'tasks-left': left } = styles;

    const today = new Date();

    const date = today.toLocaleDateString(`ko-KR`, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const dayName = today.toLocaleDateString(`ko-KR`, {weekday: `long`});

    const undoneTasks = todo.filter(todo => !todo.boolean).length;


    return (
        <header>
            <h1>{date}</h1>
            <div className={day}>{dayName}</div>
            <div className={left}>할 일 {undoneTasks}개 남음</div>
        </header>
    );
};

export default TodoHeader;