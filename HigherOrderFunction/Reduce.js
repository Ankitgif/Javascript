// The reducer function accepts 4 param: accumulator, currenValue, currentIndex, sourceArray.
//If an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue will be equal to the first element in the array.
//if no initalValue is provided then accumulator will be equal to the first element in the array and the currentValue will be equal to the second element in the array.


//without higher order 

// const arr = [5,7,1,8,4];

// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

//with higher order function

// const arr = [5,7,1,8,4];

// const sum = arr.reduce(function(accumulator, currentValue){   // here no initial value provided
//     return accumulator + currentValue;
// });
// console.log(sum);

const arr = [5,7,1,8,4];

const sum = arr.reduce(function(accumulator, currentValue){   // here initial value provided
    return accumulator + currentValue;
},10);
console.log(sum);



