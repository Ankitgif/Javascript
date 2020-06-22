//Async-Await vs Promises

const calculate = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0 || c<0)
                return reject('No number can be negative');
            resolve(a+b+c);    
        }, 1000)
    })
}

calculate(1, 2, 3).then((addition) => {
    console.log(addition);
}).catch((e) => {
    console.log(e);
})