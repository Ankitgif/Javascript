//Object prototype is invisible . Use Object.getPrototypeOf(obj) method instead of _proto_ to access prototype object.

function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj = new Student();
Student.prototype.sayHi = function(){
    console.log("Hi")
};

var studObj1 = new Student();
var proto = Object.getPrototypeOf(studObj1); //return student prototype object
console.log(proto.constructor); // return student function