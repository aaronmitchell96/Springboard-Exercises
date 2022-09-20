// function greet(){

// }

// const add = function(x,y){
//     return x +y;
// }

// const add = (x,y) => {
//     return x+y;
// }

// [2,3,6,78,99,104,23].reduce(function(max,currNum){
//     return Math.max(max,currNum);
// })

// [2,3,6,78,99,104,23].reduce((max,currNum) => {
//     return Math.max(max,currNum);
// });

// function double(arr){
//     return arr.map(function(val){
//         return val * 2
//     })
// }

const double = (arr) => arr.map(val => val*2);


const squareAndFindEvens = numbers => numbers.map(val => val**2).filter(square => square % 2 ===0)
