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

ReactDom.render(<App />,
document.querySelector('#root'));


