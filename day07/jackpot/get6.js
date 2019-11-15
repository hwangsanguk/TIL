const request = require('request');

function getLottoData(drwNo) {
  const url = `https://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      // console.log(body)
      const lottoData = JSON.parse(body);
      // console.log(lottoData);
      const realNumber = [];
      let bnusNo = 0;

      for (const [key, value] of Object.entries(lottoData,)) {
        // console.log(key)
        // console.log(value)
        if (key.includes('drwt')) realNumber.push(value);
        else if (key === 'bnusNo') bnusNo = value;
        realNumber.sort((a, b) => a - b);
      };
      // resolve({bnusNo: bnusNo, realNumber: realNumber});
      resolve({bnusNo, realNumber});
    });
  });
};

// getLottoData(884)
module.exports = getLottoData;