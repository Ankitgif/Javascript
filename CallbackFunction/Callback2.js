calculateSum = (n, callback) => {
    let i;
    let sum = 0;
    for(i=1; i<=n; i++) {
        sum += i;
    }
    console.log(`Sum = ${sum}`);
    callback(sum);
}

let n = 5;
calculateSum(n, function(sum){
    console.log(`Average = ${sum/n}`)
})