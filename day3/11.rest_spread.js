//ES5
const addNumbers =(a,b,c,d,e) =>{
    const numbers=[a,b,c,d,e];
    return numbers.reduce((acc,num)=> acc+= num,0);
};

//ES6
const addNumbers2 = (...numbers) =>{
    return numbers.reduce((acc,num) => acc+= num,0)

};

// console.log(addNumbers2(1,2,3,4,4,));


const defaultColors = ['red','blue','green'];

const addColors = ['orange','yellow'];
const sumColors = defaultColors.concat(addColors);
// console.log(sumColors);

const es6sumColors = [...defaultColors,...addColors];

console.log(es6sumColors)