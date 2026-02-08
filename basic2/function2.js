// when we are bulding an e-commerce website and we need to calulate total price of a cart - we do not know how many arguments(number of itmes in cart) the user is going to pass
// here, we use REST operator(...) - called 'spread' operator in some other cases
// REST operator is used to pass multiple values into a function

function calculateCartPrice(num1, num2){
    return num1+num2
}
const total = calculateCartPrice(299,399,412,300) // will only add 1st two arguments
console.log(total);

// ...num => REST operator when used in function definition(paramter) => collects all arguments and packs them into a single array

function calculateCartPrice2(...num){
    return num
}
const total2 = calculateCartPrice2(299,399,412,300) 
console.log(total2);  // [299,399,412,300]
// now we can loop on the array and find total sum 


// we can keep some paramters reserved if we know minimum number of arguments that are to be passed for sure => rest will go into variable with which rest operator is used
function calculateCartPrice3(val1, val2, ...num){
    return num
}
const total3 = calculateCartPrice3(299,399,412,300,678,129) 
console.log(total3);
console.log("\n");


// passing objects and arrays into functions
const user = {
    username: "shashank",
    age: 21
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
} 
handleObject(user)  // passing the object as argument 
handleObject({username: "nikhil", age: 23}) // passing the object literal

const myArray = [129,345,657,399]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([12,34,45,56]));