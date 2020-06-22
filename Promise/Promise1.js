var promise = new Promise(function(resolve,reject){
    resolve(5);
})

promise.then(addition)
.then(substract)
.then(multiplication)
.then(function(res){
    console.log(`Result = ${res}`);
}).catch(function(err){
    console.log(err);
});

function addition(val){    
    return val+5;
}

function substract(val) {
    return val-3;
}

function multiplication(val) {
    return val*5;
}
