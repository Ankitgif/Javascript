
addition(5, function(addResult, err){    //callback
    if(!err){
        substract(addResult,function(subRes,err){
            if(!err){
                multiplication(subRes,function(mulResult, err){
                    if(!err){
                        console.log(`Result = ${mulResult}`)
                    }
                });
            }
        });
    }
});

function addition(val, callback){    
    return callback(val+5, false);
}

function substract(val,callback) {
    return callback(val-3, false);
}

function multiplication(val, callback) {
    return callback(val*5, false);
}
