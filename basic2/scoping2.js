// inner function(child) can access the outer function(parent) attributes but vice-versa is not true, as inner function is inside the scope of outer function, so outer function acts like a global scope for inner function.

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // => one() can't access atrributes of two()
    two()
}

one()

if (true) {
    const username = "hitesh" // scope of this "username" is upto this if-block only
    if (true) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // cannot access inner if-block
}

// console.log(username);  // cannot access if-block attributes


// ++++++++++++++++++ interesting ++++++++++++++++++

// there are two ways in which we can define a function. One is normal, and the other is to store the function in a variable. variables in js are very powerful and can even hold functions. But as a basic rule for variables, we cannot execute functions stored in variables before their declaration/definition.

console.log(addone(5)) // this is allowed

function addone(num){
    return num + 1
}

// console.log(addTwo(5)); // calling function stored in a variable before declaration is not allowed 
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

// learn "hosting" of functions