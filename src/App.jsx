import './App.css';
import Player from './components/timerGame/Player.jsx';
import TimerChallenge from './components/timerGame/TimerChallenge.jsx';

const App = () => {

    return (
        <>
            <Player/>
            <div id="challenges">
                <TimerChallenge/>
            </div>
        </>
    )
};

export default App;