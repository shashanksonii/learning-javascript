const promiseThree = new Promise(function(x, y){
    setTimeout(function(){
        x({username: "chai", email: "chaiaurcode@dtu.ac.in"})
    }, 2000)
})

promiseThree.then(function(a){
    console.log(a);
})