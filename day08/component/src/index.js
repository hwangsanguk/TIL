import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Segment from './components/Segment';
import Message from './components/Message';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';


class App extends React.Component{
    // constructor
    // babel 이 알아서 해줌
    state = {
        comment:[],
        number: 0,
        information: faker.lorem.paragraph()
    };

    handleAddComment = () =>{
        const newComment = {
            author : faker.name.firstName(),
            time : faker.date.recent().toLocaleString(),
            body: faker.lorem.sentence(),
            avatar : faker.image.avatar(),
        }
        this.setState({
            comments: [newComment, ...this.state.comment]
        });

    };
    handlePlus = () =>{
        this.setState({ number: this.state.number +1
        });

    };
    render(){
        return(
            <>
                <span>{this.state.number}</span>
                <button onClick={this.handlePlus}>plus</button>

                <Segment>
                    <div className="ui icon header">
                    <i className="pdf file outline icon">
                        No document
                    </i>
                    </div>
                    <div className="ui primary button">Add document</div>
                </Segment>
                <Segment>
                    <h4 className="ui header">For your information</h4>
                    <p>{this.state.information}</p>
                </Segment>
                <Message header="회원 약관 변경" body="약관이 변경되었습니다" />

            </>
        )
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));
