// for-of loop syntax
// for (const element of object) {
       // loop code
// }
// "element" is just a variable used to iterate(iterator)
// "object" here is a generic term used for array, string or js objects - basically a data structure on which we want to iterate (iterable => any object that can be looped over)

// ["","",""] => array of strings
// [{},{},{}] => array of objects

const arr = [1, 2, 3, 4, 5]  // array
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"  // string
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
console.log("\n");

// maps
// maps are just like objects and store key-value pairs but they remember the order in which key-value were inserted 
// keys can be any data type/any object
// A key in a map may only occur once
// duplicate keys not allowed

const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")
map1.set('USA', "United States of America")

console.log(map1);  // prints like an object => key-value pairs
console.log("\n");

// map is iterable using for-of loop
for (const it of map1) {
    console.log(it);   // => prints array of key-value pairs for each instance in map
}
console.log("\n");


// to access key and value seperately, we need to destructure the array object as [key,value] otherwise we get them both as a single entity
for (const [key, value] of map1) {
    console.log(key, ':-', value);
    console.log(`key is ${key}`);
    console.log(`value is ${value}`);
}
console.log("\n");


// objects cannot be iterated using for-of loops - only maps can be iterated

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// for-in loop
// for-in loop can be used to iterate through objects

const myObject2 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// syntax :-
// for (const key in object) {
//     // loop code  
// }

for (const it in myObject2) {
    console.log(`${it} shortcut is for ${myObject2[it]}`);  // it = key
}
console.log("\n");

// for-in loop can also be used to iterate through arrays
// keys for an array is its index
// Array is also an object only
// objects were designed in the first place beacuse array keys(indices) were numbers and starting from 0

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`key is ${key} and value is ${programming[key]}`);
}

// for-in loop cannot be used with map object
for (const key in map1) {
    console.log(key);
}