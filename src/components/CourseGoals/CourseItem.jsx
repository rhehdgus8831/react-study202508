import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

    // console.log('styles: ', styles);

    const {'goal-item' : goalItem} = styles;

    const deleteHandler = e => {
        // console.log(item.id + ' 삭제됨!');
        onDelete(item.id);
    };

    return <li className= {goalItem} onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;