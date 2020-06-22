var fullMoon = true;

// Use var to initialize a variable
var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`); //werewolf
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`); //werewolf   

//Reassigning