const products = [
    {name:'사과', type:'과일'},
    {name:'바나나', type:'과일'},
    {name:'당근', type:'채소'},
    {name:'김씨', type:'사람'},
    {name:'이씨', type:'사람'},
    {name:'박씨', type:'사람'},
]
const result = products.find( e=> e.name==='김씨');
// console.log(result)


const fruits = [];
for (var i=0 ; i <products.length; i++){
    if (products[i].type ==='과일'){
        fruits.push(products[i]);
    };
};
// console.log(fruits)

const human = products.filter( e=> {
    return e.type ==='사람' ;
});
// console.log(human);

// 3<x<7 실습 1
const numbers = [1,2,3,4,5,6,7,8,9];
const x = numbers.filter(e =>{
    return e>3 && e<7
})
// console.log(x)


//실습 2

function myReject(arr,callback){
    const result = [];

    arr.forEach(el => {
        if(callback(el)) result.push(el)
        });
    return result
    
    };


console.log(myReject(numbers, number => number > 3))