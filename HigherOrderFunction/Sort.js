let things = ['Building' , 'Car', 'bicycle', 'automobile', 'Tree', 'house'];

things.sort((a,b) => {
    let x = a.toLowerCase(),
        y = b.toLowerCase();

        if(x<y) {return -1;}  //negative no will indicate that the first argument should come before to the second argument
        if(y<x) {return 1;}
        return 0;
})

console.log(things);