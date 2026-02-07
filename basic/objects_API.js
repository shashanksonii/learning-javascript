// destructuring objects => using shorter names for its parameters
const course = {
    coursename : "jsoneshot",
    price : "1299",
    courseInstructor : "hitesh"
}

console.log(course.courseInstructor);
// const {*paramter name*} = *object name from which value is to be extracted*
// now, you can just use *paramter name* instead of *object.paramtername*
const {courseInstructor} = course
console.log(courseInstructor);

// we can also give our custom names =>
// const {*parameter_name: custom_name} = *object_name*
const {courseInstructor: ins} = course
console.log(ins);

// we use '{}' for destructuring and we often do it when working with react.js
// arrays are also destructured sometimes

// API uses JSON files to communicate data between client and server => earlier XML was used
// JSON = javascript object notation
// most APIs uses JSON 
// Json file is basically built using objects-'{}' , array-'[]' and other datatypes
/* Rules of JSON
    1) Data is written as key : value
    2) Keys must be in double quotes
    3) Strings must be in double quotes
    4) No comments allowed
    5) Trailing commas are not allowed */

/* json example

{
  "name": "Shashank",
  "age": 21,
  "student": true,
  "skills": ["C++", "Python", "Machine Learning"],
  "address": {
    "city": "Indore",
    "country": "India"
  }
}
  
*/
