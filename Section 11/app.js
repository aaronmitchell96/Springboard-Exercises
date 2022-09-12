// function holler(){
//     console.log('Hey you');
// }

// const whisper = function(){
//     console.log('pss, i have a secret');
// }

// function add(x,y){
//     return x + y;
// }

// function subtract(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// function divide(x,y){
//     return x / y;
// }

// function power(x,y){
//     return x ** y;
// }

// const mathFuncs = [add, subtract, multiply, divide, power];

// function doMath(a,b,mathFunc){
//     return mathFunc(a,b)
// }

// doMath(3, 4, function(a,b){
//     console.log(a ** b)
// })

// function doAllMath(a,b,mathFuncs){
//     for (let func of mathFuncs){
//         console.log(func(a,b))
//     }
// }

// const colors = ['teal','cyan','peach','purple'];

// colors.forEach(function(val,i){
//     const caps = val.toUpperCase();
//     console.log(`At index ${i}, ${caps}`)
// });

// const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// })
// console.log(total)

// function forEach(arr,callback){
//     for (let i = 0; i<arr.length;i++){
//         callback(arr[i]);
//     }
// }

// forEach(color)

// const numbers = [21,37,64,99,142];
// const negatives = numbers.map(function(num){
//     return num * -1;
// })

// const doubles = numbers.map(function(num){
//     console.log(num*2);
// })

// const todos = [
// {
//     id: 1,
//     text: 'walk the dog',
//     priority: 'high'
// },
// {
//     id: 2,
//     text: 'walk the chickens',
//     priority: 'medium'
// },
// {
//     id: 3,
//     text: 'feed the cats',
//     priority: 'low'
// },
// {
//     id: 4,
//     text: 'put out the fire in my garage',
//     priority: 'very high'
// },

// ]

// const todoText = todos.map(function(todo){
//     return todo.text;
// })

// function myMap(arr,callback){
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++){
//         const val = callback(arr[i],i,arr);
//         mappedArray.push(val)
//     }
//     return mappedArray;
// }

// const priorityMap = myMap(todos, function(todo){
//     return todo.priority
// })

// const repeatedStrings = myMap(['a','b','c','d','e'],function(str,idx){
//     return str.repeat(idx);
// });

// function filter(arr,callback){
//     const filteredArr = [];
//     for (let i = 0;i<arr.length;i++){
//         if (callback(arr[i],i,arr)){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }

//for each/map/filter exercise

function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(val){
       newArr.push(val*2);
    })
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val%2 == 0){
            newArr.push(val)
        }
    })
    return newArr
}
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0]+val[val.length-1]);
    })
    return newArr;
}

function addKeyAndValue (arr,key,val){
    arr.forEach(function(object){
        object[key] = val;
    });
    return arr
}

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = 'aeiou';
    splitArr.forEach(function(char){
        let lowerCaseChar = char.toLowerCase();
        if(vowels.indexOf(lowerCaseChar) != -1){
            if (obj[lowerCaseChar]){
                obj[lowerCaseChar]++;
            } else{
                obj[lowerCaseChar] = 1;
            }
        }
        
    })
    return obj;
}

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val *2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(val,index){
        return val * index;
    })
}

function extractKey(arr,key){
    return arr.map(function(val){
        return val[key];
    })
}

function extractFullName(arr){
    return arr.map(function(obj){
        return obj['first'] + " " + obj['last'];
    })
}

function filterByValue(arr,key){
    return arr.filter(function(obj){
        return obj[key] != undefined;
    })
}

function find(arr,val){
    return arr.filter(function(num){
        return num === val;
    })[0];
}

function findInObj(arr,key,val){
    return arr.filter(function(obj){
        return obj[key] === val
    })[0];
}

function removeVowels(str){
    let lowerCaseStr = str.toLowerCase();
    const splitArr = lowerCaseStr.split("");
    const vowels = 'aeiou';
    return splitArr.filter(function(char){
        return vowels.indexOf(char) === -1;
    }).join("");
}

function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }