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

// calculate(1, 2, 3).then((addition) => {
//     console.log(addition);
//     return calculate(addition, 4, 5)
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const add = async () => {                        // (o/p is Promise {undefined} it means async behind the scene behave like a promise  so it is expecting 
                                                //something promise to be returned from within this function)
    const sum1 = await calculate(1,2,3);        // Promise {pending}  (pending means that async actually this (line) return something or return a value)
    const sum2 = await calculate(sum1,4,5);                                                //before the async could wait. async want some body that we can call await to actually notified the async keyword that something has been calculated and you have to wait for that much time.     
    const sum3 = await calculate(sum2,6,7);
    const sum4 = await calculate(sum3,8,9);
    return sum4;
}
add().then((value) => console.log(value)).catch((e) => console.log(e));