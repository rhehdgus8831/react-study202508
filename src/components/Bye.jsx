// import React from 'react'; 생략가능
import Fruit from './Fruit.jsx';

// 함수형 컴포넌트 : 최신 방식

function Bye () {
    return(
        <div>
            <a href="http://google.com">구글로 이동</a>
            <Fruit/>
        </div>
    );
}

export default Bye;