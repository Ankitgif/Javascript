let data = false;

let promise = new Promise(function(resolve,reject){
    if(data)
    resolve('success');
    else
    reject('error');
});

promise.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});