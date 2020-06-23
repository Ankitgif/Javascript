//without function prototype

// function Student() {
//     this.name = 'John';
//     this.gender = 'Male';
// }

// var studObj1 = new Student();
// studObj1.age = 15;
// console.log(studObj1.age);   //15

// var studObj1 = new Student();
// console.log(studObj1.age);     //undefined


//age property is attached to studObj1 instance. And studObj2 will not have a age property because it is defined only on studObj1 instance.
//So if we want to add new prperties later to a function which will be shared across all the instances,
//the solution is prototype
//Prototype is an object that is associated with every function and objects by default in javascript, where function property is accessible and
//modifiable and object prototype property (aka attribute) is not visible.
//Every function includes prototype object by default

// The prototype object is special type of enumerable object to which additional properties can be attached  to it which will be 
// shaed across all the instances of its constructor function


function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age);   //15

var studObj1 = new Student();
console.log(studObj1.age);     //15