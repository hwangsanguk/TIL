//Es5
const numbers = [1,2,3];
let sum =0 ;
for (var i = 0; i<numbers.length ; i++){
    sum += numbers[i];
};

//ES6
sum = numbers.reduce((acc, number)=>{
    // console.log(acc);
    return acc + number;
}, 0);

// console.log(sum);

let multiply = numbers.reduce((acc,number)=>{
    return acc * number;
},1);

// console.log(multiply);

//초기값 설정을 하지 않으면 배열의 첫번째 값을 초기값으로 지정

const stringSet = ['apple', 'is', 'good'];

// console.log(stringSet.reduce((acc,str)=> acc+str),'');

const dNumbers1 = numbers.map(e => e*2);
// console.log(dNumbers1);


const dNumbers2 = numbers.reduce((acc,num) => {
    
    // console.log('acc',acc)
    acc.push(num * 2)
    return acc
},[]);
// 초기값 acc =[] 로 설정이 된 후, push 를 통해 num *2를 넣어준다. 그것을 3번 반복 할때 찍히는 로그는 [] , [2], [2,4] 이고 마지막에 리턴값에 [2,4,6]이 들어게된다
// console.log(dNumbers2);


// 다시 한번 생각해 보기
const star = [')(',')((',')))','((']
function checkParens(str){
    const abc = str.split('') 
    console.log(abc)
    abc.reduce((acc,str)=>{
        console.log(acc);
        console.log(str);
        if (str == ')'){
            return console.log('false');
        }
        else(str =='(')
        return acc
    },[])


}
star.forEach(e =>{
    console.log(checkParens(e))
})

//강사님 코드
// function checkParens(str) {
//     return str.split('').reduce((acc, char) => {
//       if (acc < 0) {
//         return acc;
//       } else if (char === '(') {
//         ++acc;
//       } else {
//         --acc;
//       };
//       return acc;
//     }, 0);
//   };


const users =[
    {id: 1, type: 'sitting'},
    {id: 2, type: 'standing'},
    {id: 3, type: 'sitting'},
    {id: 4, type: 'standing'},
    {id: 5, type: 'sitting'},
]

//reduce 사용하여 앉아있는 사람의 수 체크
const sit = users.reduce((acc,sit) =>{
    if(sit.type == 'sitting'){
        
        return ++acc
    };
    return acc
},0);
// console.log(sit);

const samples = [1,2,3,4,5,6,1,2,3,4];

function unique(arr){
    return arr.reduce((acc,element)=>{
        if(acc.every(e =>e != element)){
            acc.push(element)
        };
        return acc
    },[]);
};
console.log(unique(samples));