//Define an object constructor, and then create objects of the constructed type.


//Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  let myFriend = new Person("John", "Doe", 24, "blue");
  
  // Display age
  console.log(Person.age); 

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false