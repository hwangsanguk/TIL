// ES5
function add(a,b){
    return a+b
};

console.log(add(1,3));


// ES6
const add2 = (a,b) =>{
return a+b;
};


const add3 = (a,b)=> a+b;
const square = a => a*a;
console.log(add2(1,2));
console.log(square(3));

const obj = {
    name:'wook',
    sayHi:function(){
        console.log('hi1');
    },
    sayHi2() {
        console.log('hi2');
    },
};
obj.sayHi();
obj.sayHi2();
console.log(obj.name);