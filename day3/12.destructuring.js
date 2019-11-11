//ES5

const computer = {
    model:'mac',
    year :2019,
    pirce:300,
};

// const model = computer.model;
// const year = computer.year;
// const price = computer.price;
// => 이런식으로 써야 했음  

//ES6
const {model,year,price} = computer;
console.log(model); // 내부 이름과 똑같이 적어야함

//실제

const labtops = [
    {
        model: 'gram',
        year : 2018,
        price : 100
    },
    {
        model: 'gram',
        year : 2019,
        price : 150
    }
];
const result1 = labtops.map((el)=>{
    return `<h1>${el.model}</h1>`
})
const result2 = labtops.map(({model})=>{
    return `<h1>${model}</h1>`
})

console.log(result1);
console.log(result2);