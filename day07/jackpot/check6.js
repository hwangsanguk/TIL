const get6 = require('./get6');
const randomNumbers = require('./pick6');

get6(884)
  .then(data => {
    console.log(data);
    console.log(randomNumbers);
    // randomeNumbers랑 비교하기
  });
