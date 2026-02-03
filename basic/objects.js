// objects can be declared using two methods - 'literal' and 'constructor'
// using constructor => singleton object ; using literal => not a singleton object (multiple instances are/can be made)
// constructor => Object.create
// objects have key and value pairs

//-------------------------------------------------------------------------------------
// object literals => key-value pairs
// key is pocessed as string by system : eg. name will be considered as "name"
// data type of 'values' can be anything - array, number, another object, boolean, function etc.

const mySym = Symbol("key23") //symbol datatype

const JsUser = {
    name: "nikhil",
    "full name": "nikhil soni",    // key as a string
    age: 21,
    mySym: "mykey23",  // wrong way - dtype will not show
    [mySym]: "mykey23",    // special key syntax for symbol dtype
    location: "delhi",
    email: "soni29@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["monday","sunday"]
}

// 2 methods to access object values => JsUser.name & JsUser["name"]
// if key is defined as a string in the object, then we can only access the value corresponding to that key by using bracket method - JsUser["full name"]

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

//for accessing symbol dtype without changing its dtype use - JsUser[mySym]
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
console.log(typeof mySym);

console.log(JsUser);
JsUser.email = "soni29@openai.com"  // to modify a value
// Object.freeze(JsUser) // prevents any further modification in the whole object
JsUser.email = "nikhil29@openai.com"
console.log(JsUser); 

// treat function names just as variables in javascript
// create a function for "JsUser" object. Function name = "greeting"
// remove object.freeze() otherwise object won't be modified
JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);  // returns just a function reference(anonymous) and do not execute/run the function
console.log(JsUser.greeting());  // => function calling/execution

// "this" keyword is used to refer to the same calling object and access its attributes/properties => . => dot operator is used
// `` => back ticks => string interpolation
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name} & ${this["full name"]}`);
}
console.log(JsUser.greeting2());  // to execute, use ()
// "undefined" showing after function calls will be explained later
