// function includeJS(jsFilePath) {
//     const js = document.createElement("script");
//     js.type = "text/javascript";
//     js.src = jsFilePath;
//     document.body.appendChild(js);

// }
// includeJS("./key.js");

const button = document.querySelector("#js-button");
const inputArea = document.querySelector("#js-input");
const resultArea = document.querySelector("#result-area");

//API 요청
function searchAndPush(keyword) {
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', URL);
    GiphyAJAXCall.send('POST');
    GiphyAJAXCall.addEventListener('load', e => {
        const rawData = e.target.response;
        const parsedData = JSON.parse(rawData);
        // console.log(parsedData);
        // 상욱 코드
        // resultArea.innerHTML = null;
        // const dataSet = parsedData.data;
        // console.log(dataSet);
        // console.log(dataSet[0].url)
        // dataSet.forEach(e =>{
        //     console.log(e)
        //     resultArea.innerHTML += `<img src=${e.images.fixed_height.url} />`
        // })
        pushToDOM(parsedData);

    })
};
//강사님
function pushToDOM(parsedData) {
    resultArea.innerHTML = null;
    const dataSet = parsedData.data;
  
    dataSet.forEach(imageData => {
      const imageURL = imageData.images.fixed_height.url;
      const alt = imageData.title;
      resultArea.innerHTML += `<img src="${imageURL}" alt="${alt}" />`
    });
  }
button.addEventListener('click', () => {
    searchAndPush(inputArea.value);

})
inputArea.addEventListener('keypress', e => {
    if (e.which === 13) searchAndPush(inputArea.value);
})