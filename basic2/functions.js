// function => keyword
// function definition
function func_name(){
    console.log("func call");
}
func_name()  // function name with parenthesis is function call/execution
func_name  // function name is just a refernce(memory)
console.log(func_name());
console.log(func_name);

// in js, we do not need to give datatype of parameters/arguments which we pass to the functions
function sum1(num1, num2){
    console.log(num1 + num2);
}
sum1() // NaN
sum1(3,17)
sum1(3,"14") // treats both arguments as string and concatenates them
sum1(4,"a")
sum1(6,null)
const result1 = sum1(2,34)
console.log("Result: ", result1);


function sum2(num1, num2){
    //console.log("this is sum2 call");
    //let result = num1 + num2
    //return result
    console.log("this is sum2 call");
    return num1+num2
    //code written here(after return) is not reachable
}
const result2 = sum2(34,19)
console.log("Result: ", result2);
console.log(sum2(31,4));
// we use if-else conditions to check if arguments given to a function are suitable/valid or not 


function loginUserMessage(username){
    return `${username} just logged in`   // returns a string
}
const message = loginUserMessage("nuclearsoni")
console.log(message);
console.log("Another way: ", loginUserMessage("nuclear"));
console.log(loginUserMessage(""));  // empty string is passed
console.log(loginUserMessage());  // undefined
console.log("\n");


// handle these cases using if-else
function loginUserMessage2(username){
    if(!username){  //if(username === undefined){
        console.log("Enter a valid username");
        return  // returns undefined value
    }
    return `${username} just logged in`   
}
console.log(loginUserMessage2());  // function returns undefined value so undefined also gets printed
console.log("\n");
// "===" => strict equailty operator
// "" => empty string is considered a false value
// undefined => also considered as a false value
// !undefined => true value


// handle undefined argument using default parameter
function loginUserMessage3(username = "soni"){
    return `${username} just logged in`   
}
console.log(loginUserMessage3()); // "soni" = default
console.log(loginUserMessage3("hi")); // value overwritting


// learn lexical scoping