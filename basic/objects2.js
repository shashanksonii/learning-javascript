const User = new Object()  // using constructor => singleton
const User2 = {} // non singleton
// both User and User2 are declared as empty objects 
console.log(User);
console.log(User2);

// in javascript, we can add parameters in the object later after decalaring them

User2.id = "soni34"
User2.name = "shashank"
User2.isLoggedIn = true
console.log(User2);

// object inside object :-
const regularUser = {
    email : "soni@gmail.com",
    namee : {
        prefix : "Mr" ,
        fullname : {
            firstname : "shashank" ,
            lastname : "soni"
        }
    }
}
console.log(regularUser);
console.log(regularUser.namee);
console.log(regularUser.namee.fullname);
console.log(regularUser.namee.fullname.lastname);

// merge 2 objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj6 = {5: "e", 6: "f"}
const obj3 = {obj1,obj2} // combines but object inside object - similar in case of array merging
console.log(obj3);

// Object.assign() copies content from all other parameters(source) to the 1st parameter(target) and creates a new object reference as well
const obj4 = Object.assign(obj1,obj2)
console.log(obj1);
console.log(obj4);
console.log(obj1===obj4);

// so better to use '{}' - empty object as the 1st parameter(target)
const obj5 = Object.assign({},obj2,obj6)
console.log(obj2);
console.log(obj5);

// using the spread operator => latest and mostly used
const obj7 = {...obj2, ...obj6}
console.log(obj7);

// array of objects - users from database 
const users = [
    {id: 1, email: "soni@gmail.com"},
    {id: 2, email: "soni2@gmail.com"},
    {id: 3, email: "soni3@gmail.com"},
]

console.log(users[0].email);
console.log(users[2].email);

console.log(User2);
console.log(Object.keys(User2)); // returns array of all all keys
console.log(Object.values(User2)); // array of all values
console.log(Object.entries(User2)); // array of array

// retreival from db often requires looping on objects to extract/calculate certain values
// create an object on browser console and check prototype functions available

// function to check if that object have a particular property(key) value or not => return datatype is boolean
console.log(User2.hasOwnProperty('isLoggedIn'));
console.log(User2.hasOwnProperty('isLogged'));