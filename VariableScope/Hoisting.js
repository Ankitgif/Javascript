// Attempt to use a variable before declaring it
console.log(x);    //undefined

// Variable assignment
var x = 100;


// Attempt to use a variable before declaring it
console.log(y);  //reference error

// Variable assignment without var
y = 100;



//The reason for this is due to hoisting, 
//a behavior of JavaScript in which variable and function 
//declarations are moved to the top of their scope.
// only the actual declaration is hoisted, not the initialization that's why out is undefined and reference error


// Javascript interpret

// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;