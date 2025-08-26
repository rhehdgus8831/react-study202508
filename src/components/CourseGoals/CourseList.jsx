import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({goals, onDelete }) => {

    return (
        <ul className='goal-list'>

            {
                goals.map(goals => <CourseItem
                    key = {goals.id}
                    id = {goals.id}
                    text = {goals.text}
                    onDelete = {onDelete}/>)
            }

        </ul>
    );
};

export default CourseList;