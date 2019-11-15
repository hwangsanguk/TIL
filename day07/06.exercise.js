const customers = [
  {
    id: 1,
    name: 'tony',
    isGold: true,
    email: 'edutony.hphk@gmail.com'
  },
  {
    id: 2,
    name: 'thor',
    isGold: false,
    email: 'thor@gmail.com'
  },
  {
    id: 3,
    name: 'hulk',
    isGold: true,
    email: 'hulk@gmail.com'
  },
];

// 1. customer를 찾고
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const customer = customers.find(customer => customer.id === id)
      if (customer) resolve(customer)
      else reject(new Error('일치하는 사용자가 없습니다.'))
    }, 2000);
  });
};

// 2. gold인지 확인하고,
function getGold(isGold) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isGold === true) res(true)
      else rej(new Error('골드회원이 아닙니다.'))
    }, 2000);
  });
};

// 3. 맞으면, console.log(email)
function sendEmail() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('sending email...');
    }, 2000);
  });
};

// (익명함수)(); 단 1번 실행됩니다
(async function() {
  const customer = await getCustomer(1);
  const isGold = await getGold(customer.isGold);
  if (isGold) console.log(await sendEmail());
})();
