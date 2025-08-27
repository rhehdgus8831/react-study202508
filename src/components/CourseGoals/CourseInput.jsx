import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({onAdd}) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    // 입력값에 오류가 있는지 여부를 상태관리
    const [isValid, setIsVaild] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();

        if (enteredGoal.trim().length === 0) {
            setIsVaild(false);
            return;
        }
        console.log(`입력된 목표`,enteredGoal);

        onAdd(enteredGoal);


        setEnteredGoal('');
        setIsVaild(true)
    }

    const goalInputChangeHandler = e => {
        const inputValue = e.target.value;

        if(inputValue.trim()) {
            setIsVaild(true);
        }

        setEnteredGoal(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label style={{color: isValid !== false ? 'black':'red'}}>나의 목표</label>
                <input type='text'
                       value={enteredGoal}
                       onChange={goalInputChangeHandler}
                       style=
                           {{
                           background : isValid !== false ? 'transparent': 'salmon',
                           borderColor: isValid !== false ? 'black': 'red'
                            }}
                />
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;