// ES5
const computers = [
    { name: 'mac-air', ram: 4 },
    { name: 'mac-pro', ram: 16 },
    { name: 'gram', ram: 8 },
  ];
  
  let everyComputer = true;
  let someComputer = false;
  
  for (var i = 0; i < computers.length; i++ ) {
    const computer = computers[i];
    if (computer.ram < 10) {
      everyComputer = false;
      break;
    }
  
    if (computer.ram > 10) {
      someComputer = true;
      break;
    }
  };
  
  // ES6
  everyComputer = computers.every(computer => computer.ram < 10);
  someComputer = computers.some(computer => computer.ram > 10);
  
  
  // 실제
  const dataSet = [
    {name: 'tony1', answer: 'hi'},
    {name: 'tony2', answer: ''},
    {name: 'tony3', answer: 'hello'},
  ];
  // console.log(dataSet.every(user => user.answer.length > 0));
  
  
  
  // 실습
  const users = [
    { id: 1, submit: true },
    { id: 2, submit: true },
    { id: 3, submit: true },
    { id: 4, submit: false },
  ];
  // submit의 유무
  // every : 모두가 submit 했는가?
  // console.log(users.every(user => user.submit === true))
  
  // some : 한명이라도 submit 했는가?
  // console.log(users.some(user => user.submit === true))
  
  
  // 실습2
  // some
  function mySome(arr, callback) {
    let result = false;
    arr.forEach(el => {
      if (callback(el)) result = true;
    });
    return result;
  };
  
  function mySome2(arr, callback) {
    return !arr.every(e => !callback(e));
  }
  
  console.log(mySome(users, e => e.submit)); // e.submit 이 true이면
  console.log(mySome2(users, e => e.submit));