//here the same variable "element" is updated for each iteration => same memory location is modified with a new value
let element;
for (let index = 0 ; index < 10 ; index++) {
    element = index;
    console.log(element);
}

// when "const" variable is initiliazed inside loop => it is reinitialized everytime the loop runs => it is like new variable is created for each iteration(think of each iteration as a seperate block of code) and therefore there is no conflict as each iteration comes with a new scope => each iteration have their own unique variable "ele" with differnt memory location
for (let i = 15 ; i <= 20 ; i++) {
    const ele = i;
    console.log(ele);
}

// console.log(ele);  => not accesible here because of block scoping of loop


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop value ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }   
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const ele = myArray[index];
    console.log(ele);
}


// break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        break
    }
    console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 10; index++) {
    if (index == 5 || index == 7) {
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`Value of i is ${index}`);
}