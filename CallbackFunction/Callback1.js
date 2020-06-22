//Any function that is passed as an argument is called a callback function.
//A callback is a function that is to be executed after another function has finished executing- hence the name callback.

//why callback?
// javascript is an event driven language. 
//this means that instead of waiting for a response before moving on, 
//javascript will keep executing while listening for other events.

//Callbacks are a way to make sure certain code does'nt execute until other code has already finished execution.

//The fundamental reason for a callback is to run code in response to an event.
//e.g After click of mouse (some) code will execute.

show =() => {
    console.log('Show function');
}

display = (callback) => {
    console.log('Display function')
    callback();
}

display(show);

