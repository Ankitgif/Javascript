//Higher order function is a function that recieves a function as an argument or returns the function as output

//without higher order function

// const arr1 = [1,2,3];
// const arr2 = [];
// for(let i=0;i<arr1.length;i++) {
//     arr2.push(arr1[i]*2);
// }
// console.log(arr2);

//with higher order function map

// const arr1 = [1,2,3];
// const arr2 = arr1.map(function(item){
//     return item*2;
// }); 

// console.log(arr2);

//Using arrow function
const arr1 = [1,2,3];
const arr2 = arr1.map(item => item*2); 
console.log(arr2);