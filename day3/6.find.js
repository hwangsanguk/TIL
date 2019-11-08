//ES5

const users = [
    {name: 'tony', age:32},
    {name: 'hulk', age:45},
    {name: 'thor', age:1234},
    {name: 'ironMan', age:54},
];

let user = null;

for(var i=0 ; i<users.length; i++){
    if(users[i].name === 'ironMan'){
        user = users[i];
        break;
    };
};
console.log(user);

//ES6
user2 = users.find((user) =>{
    console.log(user.name ==='hulk')
    return user.name ==='hulk';// return 값이 꼭 있어야함
});
console.log(user2);



