import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children, destId }) => {
    return ReactDOM.createPortal(
        children, // 컴포넌트를 받을 때는 children을 끼워서 받기
        document.getElementById(destId)
    );
};

export default Portal;