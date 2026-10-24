// async function hello(){
//     console.log("This is an async function")
// }

function APIcall(day){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data: ", day*3);
            resolve("HTTP 200 OK")
        }, 3000)
    })
}

// APIcall()
// await APIcall()

// consuming the API call
async function getWeatherData(){
    await APIcall(12)
    await APIcall(14)
}


// old example
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

// async function getAllData(){
//     console.log("Fetching data1...")
//     await getDataFromDB(12);
//     console.log("Fetching data2...")
//     await getDataFromDB(14);
//     console.log("Fetching data3...")
//     await getDataFromDB(16);
// }


(async function (){
    console.log("Fetching data1...")
    await getDataFromDB(12);
    console.log("Fetching data2...")
    await getDataFromDB(14);
    console.log("Fetching data3...")
    await getDataFromDB(16);
})();