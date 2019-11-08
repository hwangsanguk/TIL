//ES5
function makeRequest(url,method){
    if(!method){
        method = 'GET';
    }
    //request()
};

//ES6
function makeRequest2(method ='GET'){
    console.log(method)
};

makeRequest2('post');

const sum = (a=1,b=1) =>  a+b;
console.log(sum())