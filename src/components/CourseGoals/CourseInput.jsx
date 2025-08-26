import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({onAdd}) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputChangeHandler = e => {
        setEnteredGoal(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();

        if (enteredGoal.trim().length === 0) {
            return;
        }
        console.log(`입력된 목표`,enteredGoal);

        onAdd(enteredGoal);


        setEnteredGoal('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>나의 목표</label>
                <input type='text'
                       value={enteredGoal}
                       onChange={goalInputChangeHandler}

                />
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;