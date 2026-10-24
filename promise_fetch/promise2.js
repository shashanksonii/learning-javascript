// suppose we want to serve this function as an API
function getDataFromDB(id, getNextData){
    setTimeout(() => {
        console.log("Data: ", (id*3)+43);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}


// this API call will return a promise object as response.
// function getDataFromDB(id, getNextData){
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if(id>128){
//                 console.log("This is promise inside the reject block")
//                 reject("Error id 1028");
//             }
//             else {
//                 console.log("Data: ", (id*3)+43);
//                 resolve("Query successful and data fetched");
//                 if(getNextData){
//                     getNextData();
//                 }
//             }
//         }, 5000)

//     })
// } 

// consuming the promises
// let promiseOne = getDataFromDB(23);
// let promiseTwo = getDataFromDB(132);

// promiseOne.then((res) => {
//     console.log("Promise fulfilled", res);
//     console.log("\n")
// })

// promiseTwo.catch((err) => {
//     console.log("Promise rejcted", err);
// })


// ==========Promise chaining==============


function asynFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success 200 ok")
        }, 4000)
    })
}

function asynFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success 200 ok")
        }, 4000)
    })
}

// console.log("Fetching data1...")
// let p1 = asynFunc1();
// p1.then((res) => {

//     console.log("we are now inside .then() of p1")
//     console.log(res)
//     console.log("Fetching data2...")

//     let p2 = asynFunc2();
//     p2.then((res) => {
//         console.log("we are inside .then() of p2");
//         console.log(res);
//     })

// })

// console.log("Fetching data1...")
// asynFunc1().then((res) => {

//     console.log("we are now inside .then() of p1")
//     console.log(res)
//     console.log("Fetching data2...")

//     asynFunc2().then((res) => {
//         console.log("we are inside .then() of p2");
//         console.log(res);
//     })

// })

// console.log("Fetching data2...")
// let p2 = asynFunc2();
// p2.then((res) => {
//     console.log("we are now inside .then() of p2")
//     console.log(res)
// })



// ==========================================================
// the first exmple, now with chaining 
// we do not need to use complex callback functions now
function getDataFromDB(id){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(id>128){
                console.log("This is promise inside the reject block")
                reject("Error id 1028");
            }
            else {
                console.log("Data: ", (id*3)+43);
                resolve("Query successful and data fetched");
            }
        }, 5000)

    })
} 

// getDataFromDB(12).then((res) => {
//     console.log(".then() of 1st req")
//     console.log(res)
//     getDataFromDB(121).then((res) => {
//         console.log(".then() of 2nd req")
//         console.log(res)
//     })
// })

getDataFromDB(12)
    .then((res) => {
        console.log(".then() of 1st req")
        console.log(res)
        return getDataFromDB(121)
    })
    .then((res) => {
        console.log(".then() of 2nd req")
        console.log(res)
        return getDataFromDB(14)
    })
    .then((res) => {
        console.log(".then() of 3rd req")
        console.log(res)
    })