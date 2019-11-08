//ES 5

const numbers = [1,2,3];
const doubleN = [];

for(var i = 0 ; i <numbers.length; i++){
    doubleN.push(numbers[i]*2);
};


//ES6

const doubleN2 = numbers.map(e => e*2);
console.log(doubleN2);

// data = [1,2,3,4]

// data.map(e =>{
//     return<h1>e</h1>
// }) ==> 이런식으로 사용이 된다

const images = [
    {
        h:5,
        w:5,},
    {
        h:15,
        w:15,},
    {
        h:25,
        w:25,},
    {
        h:35,
        w:35,},
    {
        h:45,
        w:45,},
];

// h
const heights = images.map( e => e.h);
// console.log(heights);

//function object Value

function plunk(arr,key) {
    const result = [];
    for (let i =0 ; i<arr.length; i++){
        result.push(arr[i][key]);
    }
    return result;
};
const result = plunk(images, 'w')
console.log(result)