let data = false;

let promise = new Promise(function(resolve,reject){
    if(data)
    resolve('success');
    else
    reject('error');
});

promise.then(function(msg){
    console.log(msg);
},
function(err){
    console.log(err);
}
);