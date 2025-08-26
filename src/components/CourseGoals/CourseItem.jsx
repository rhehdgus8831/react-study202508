import React from 'react';
import './CourseItem.css';


const CourseItem = ({text, id, onDelete}) => {

    const deleteHandler = () => {
        onDelete(id)
    }


    return <li className='goal-item' onClick={deleteHandler}>{text}</li>;
};


export default CourseItem;