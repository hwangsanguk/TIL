import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


class App extends React.Component{
    // constructor
    // babel 이 알아서 해줌
    state = {
        comment:[],
        number: 0,
        infomation: faker.lorem.paragraph()
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));
