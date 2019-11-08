//ES5
const colors = ['red', 'blue','green'];

for(var i=0 ; i<colors.length; i++){
// // console.log(colors[i]);
}


//ES6
// colors.forEach(color => console.log(color)) //for Each 문을 사용하면 colors 배열 안의 값을 하나씩 빼내어서 만들어줌

function forEach2(el,callback){
    for(let i = 0 ; i<el.length ; i ++){
        if(!Array.isArray(el)) throw new Error('배열이 아니에유');
       callback(el[i]);
    };

};
forEach2(colors, e=> console.log(e));

const images = [
    {
        h:5,
        w:5,},
    {
        h:15,
        w:15,},
    {
        h:25,
        w:25,},
    {
        h:35,
        w:35,},
    {
        h:45,
        w:45,},
]
images.push({h:55,w:55});
console.log(images)

const area = [];

// forEach문을 사용해소  W*H  area에 저장
images.forEach( image => {
    area.push(image.h * image.w)
});
console.log(area);