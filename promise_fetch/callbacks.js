// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(x, y, sumCallback){
//     sumCallback(x,y);
// }

// calculator(2,7,sum);



function calculator(x, y, sumCallback){
    sumCallback(x,y);
}

// calculator(2,13, (p,q) => {
//     console.log(p+q);
// });



const hello = () => {
    console.log("hellew");
}
setTimeout(hello, 3000);