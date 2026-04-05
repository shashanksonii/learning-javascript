// For-each loop
// for each loop is a built in property/prototype in array object of js (check on browser console)
// In JavaScript, the forEach() method is an iterative array function used to execute a provided function (callback) once for each element in an array.

// the callback function => written inside parenthesis of .forEach()
// callback function takes as paramter - the iterator on array (item/element)
// whatever is given as parameter to the callback function, it iterates through the whole array and that function is executed for each element in the array

// callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//Performs the specified action for each element in an array.

// callback fn can accept upto 3 params - 1st is value/item , 2nd is index and 3rd is array itself 

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
// val is the iterator here and represent each item in the array => callback fn will be executed for each val
// callback fn do not require name 
console.log("\n");


coding.forEach( (item) => {
    console.log(item);
} )
// as callback fn do not require name therefore arrow functions do not need to be stored in a named variable
console.log("\n");


function printMe(x){
    console.log(x);
}
// this is written as a seperate function definition
console.log("\n");


coding.forEach(printMe) 
// here we only need to give the refernece(address) of the desired function and we do not need to execute it here
// therefore we do not write printMe()
console.log("\n");


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )
coding.forEach( (i, j, k) => { console.log(i, j, k);} )
console.log("\n");
// callback fns accepts 3 params


// "array of objects" is the most common dtype that we get from a database and here is how to iterate through it :-
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {  console.log(item.languageName); } )
// here, "item" refers to an object as each element of an array is an object
// and "languageName" is key of object