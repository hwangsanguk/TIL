import React from 'react';
import ReactDom from 'react-dom';

const App = ()=>{
    window.navigator.geolocation.getCurrentPosition(
        (position) =>{ console.log(position)},
        (error) => {console.log(error)}
    )
    return(
        <div>계절 확인</div>
    );
};
//클래스형 컴포넌트
//1. JS class 를 사용
//2. extends React.Component
//3. render(){return(JSX template)}

ReactDom.render(<App />,
document.querySelector('#root'));


