function countdown(seconds){
    return new Promise(function (resolve,reject){
        for(let i=seconds; i=>0; i--){
            setTimeout(function(){
                if(i>0) console.log(i+'...');
                else resolve(console.log("go"));
            }, (seconds-i)*1000);
        }
    });
}
countdown(5);

//FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
//How to fix?