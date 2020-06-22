var message = 'Hi';
console.log(message);

//Var has no block scope
//Variables declare with 'var', are either function-wide or global. They are visible through blocks.


//Block scope
if(true) {
    var test = true;
}
console.log(test); // variable lives after if

//A variable declared with var in a block scope is available outside of that block scope.

//Function scope
function iHaveScope() {
    var secret = 42;
  }
 console.log(iHaveScope.secret); //secret is not defined


// A variable declared with var in a function scope can’t be accessed outside that function scope.