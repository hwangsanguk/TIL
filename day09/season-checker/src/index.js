import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
//함수형 컴포넌트
// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) =>{ console.log(position)},
//         (error) => {console.log(error)}
//     )
//     return(
//         <div>계절 확인</div>
//     );
// };

//클래스형 컴포넌트
//1. JS class 를 사용
//2. extends React.Component
//3. render(){return(JSX template)}
class App extends React.Component {
    //constructor 에서 하는 일 이 state설정 뿐일 때, 생략이 가능함
    
    constructor(props) {
        super(props);

        //오브젝트 형태로 들어가야함 key value
        //state눈 컴포넌트 안에서만 사용됨
        //컴포넌트가 생성될 때, 단 1번만
        //setState로만 데이터 수정
        this.state = {
            lat: null,
            errorMessage: ''
        };
    };
    componentDidMount(){
        console.log("컴포넌트가 화면에 렌더링이 끝났따")
    };
    componentDidUpdate(){
        console.log('컴포넌트가 업데이트가 되고, 리렌더링이 끝났다')
    };
    conditionalRender(){
        if (this.state.lat && !this.state.errorMessage){
            return(
                <div>
                    <SeasonDisplay lat= {this.state.lat}/>
                </div>
            )
        };
        //거절
        if(!this.state.lat && this.state.errorMessage){
            return(
                <div>
                    {this.state.errorMessage}
                    사용자 위치 정보가 필요합니다 
                </div>
            )
        }
    };

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                 console.log(position)
                this.setState({lat :position.coords.latitude})
                 },
            (error) => { console.log(error)
            this.setState({
                errorMessage:error.message
            }) }
        );
        //조건부 렌더링

        //허용
      
        return (
            <div>
                <Spinner />
            </div>
        );
    };
    render () {
        return (
            <div>
                {this.conditionalRender()}
            </div>
        )
    }
}

ReactDom.render(<App />,
    document.querySelector('#root'));

    //life cycle method

    //constructor() {단 1번 실행되면 좋은 코드들}
    //render() {return JSX Template}
    //componentDidMount(){ 컴포넌트가 화면에 렌더링이 끝나면}
    //componentDidUpdate(){컴포넌트가 업데이트가되 고, 리렌더링이 끝나면}
    //componentWillUnmount()


