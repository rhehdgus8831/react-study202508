import React, {useState} from 'react';
import CourseList from './components/CourseGoals/CourseList.jsx';
import CourseInput from './components/CourseGoals/CourseInput.jsx';
import './App.css';

const App = () => {

    const goalList = [
        {
            id: 'g1',
            text: '테스트 데이터1',
        },
        {
            id: 'g2',
            text: '테스트 데이터2',
        },
    ]



    // 목표데이터들의 묶음배열
    const [goals, setGoals] = useState(goalList);

    const  addGoalHandler = (enteredGoal) => {
        setGoals(prev => {
            const newGoal = {
                id: `g${Math.random().toString()}`,
                text: enteredGoal,
            };
            return [...prev, newGoal];
        })
    }


    const deleteHandler = (goalId) => {
        setGoals(prev => prev.filter(goal => goal.id !== goalId));
    }



    return (
        <div>
            <section id='goal-form'>
                <CourseInput onAdd={addGoalHandler} />
            </section>
            <section id='goals'>
                <CourseList goals={goals} onDelete={deleteHandler}/>
            </section>
        </div>
    );
};

export default App;