// this function basically mimics/simulates fetching data from a DB
function getDataFromDB(id){
    console.log("Data: ", (id*3)+43);
}


// suppose fetching data from DB takes 2 seconds, so mimic this using <setTimeout()>
function getDataFromDB(id, getNextData){
    setTimeout(() => {
        console.log("Data: ", (id*3)+43);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}

// getDataFromDB(12, () => {
//     getDataFromDB(15, () => {
//         getDataFromDB(23, () => {
//             getDataFromDB(3);
//         });
//     });
// });

getDataFromDB(12, () => {
    console.log("Fetching data2.... ")
    getDataFromDB(15, () => {
        console.log("Fetching data3.... ")
        getDataFromDB(23, () => {
            console.log("Fetching data4.... ")
            getDataFromDB(3);
        });
    });
});