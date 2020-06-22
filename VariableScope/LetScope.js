//Block Scope
if(true) {
    let exam = 5;
    console.log(exam);  // let is block scope
}
//console.log(exam); // exam is not defined

function iHaveScope() {
    let secret = 42;
  }
 console.log(iHaveScope.secret); //secret is not defined