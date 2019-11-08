// const 
const name = 'wook';

const ob = {
  name: 'john',
  gen: 'male',
}
// console.log(ob.gen);

// name = 'thor';
ob.name = 'thor'; //이름을 변경

// let
let ob2 = {
  name: 'john',
  gen: 'male',
};

ob2.name = 'thor';

ob2 = {
  age: 25,
} // 배열에 나이를 추가
console.log(ob2.age)

const newName = name + 'stark';
console.log(newName);