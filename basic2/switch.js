// switch (key) {
//     case value: 
//         break;
//     default:
//         break;
// }
// "key" is matched with "value" => they both should have same data type : string, number etc.

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("3rd month");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// if "break" is not written => each case is exectuted after the case for which condition is matched *except for the default case*

// shift + alt + down arrow => to duplicate a snippet


//-------------truthy and falsy values---------------


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// empty string "" is a falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// empty array and object are truthy values, function with no paramters and definition is also a truthy value
// "0", 'false', " ", [], {}, function(){}

// to check if an array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

// to check if an object is empty or not
// Object.keys() returns an array
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 , false == '' , 0 == '' ; => all comparisons return "true" boolean

// Nullish Coalescing Operator (??): works with null, undefined
// to handle functions or calls which may return null or undefined values

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? do this if true : do this if false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")