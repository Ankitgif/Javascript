// Global variables are those declared outside of a block
// Local variable are those declared inside of a block.

//Initialize a global variable
var species = "human";

function transform() {
    //Initialize a local, function-scoped variable
    var species = "werewolf";
    console.log(species);
}

console.log(species);
transform();
console.log(species);