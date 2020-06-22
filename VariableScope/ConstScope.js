//const PI = 3.141592653589793;
//PI = 42;  // Typeerror : Assignment to constant variable 


//Block Scope
if(true) {
    const PI= 5;
    console.log(PI);  // const is block scope
}
//console.log(PI); // PI is not defined


//If const is object then we can change its property
const dessert = { type: 'pie' };
dessert.type = 'pudding'; 
console.log(dessert.type) // pudding

//but cannot re-assign
const snacks = { type: 'pie' };
snacks = { type: 'cake' };