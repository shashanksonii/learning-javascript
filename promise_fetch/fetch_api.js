const URL = "https://jsonplaceholder.typicode.com/comments"
const paraData = document.getElementById('para')
const button = document.getElementById('btn')

// let promise = fetch(URL) // options = GET by default
// console.log(promise)

// const getData = async () => {
//     console.log("Fetching data...")
//     let response_promise = await fetch(URL)
//     // console.log(response_promise) // JSON format
//     console.log(response_promise.status)

//     let data = await response_promise.json();
//     console.log(data) // js object - array
//     console.log(data[0]) // access using index
//     console.log(typeof(data[0]))
//     console.log(data[0].body) 

//     paraData.innerText = data[0].body
// }

function getData(){
    fetch(URL)
        .then((res) => {
            console.log(res)
            console.log(res.status)
            return res
        })
        .then((res) => {
            let data = res.json()
            return data
        })
        .then((res) => {
            console.log(res[0])
            console.log(res[0].body)
            paraData.innerText = res[0].body
        })
}

function getData(){
    fetch(URL)
        .then((res) => {
            console.log(res)
            console.log(res.status)
            return res.json()
        })
        .then((res) => {
            console.log(res[0])
            console.log(res[0].body)
            paraData.innerText = res[0].body
        })
}

button.addEventListener('click', getData)

// getData()