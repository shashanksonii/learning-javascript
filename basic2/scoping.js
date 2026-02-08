// var, let, const
// when '{}' is used with functions, if-else or loops => it is a scope/block

let a = 100
const b = 200
var c = 300
// this is global scope and vraibles declared here can propagate their scopes inside blocks of if-else or functions
if(true){
    // this is block/local scope
    let a = 340   // a new memory location
    const b = 20
    var c = 89 // c = 89  
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("\n");
    // scope of local 'a' and 'b' is limited to this block only but scope of 'c' propagates outside this block
}
console.log(a);
console.log(b);
console.log(c);
console.log("\n");

if(true){
    a = a + 10 // access the same memory location
    console.log(a);  // 100+10
    // b = b*2  => not allowed as 'const'
    console.log(b);
}
console.log(a);  // therefore the change reflects here as well

// this is the problem with 'var' its scope is always global(propagates outside its block) that is why 'var' is never used in modern javascript

// learn DOM = document object model => how html webpage is manipulated using javascript