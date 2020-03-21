const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

// forma 1
fetchData(API)
.then(response => {
    console.log(response.info.count)
    return fetchData(API)
    .then(response2 => {
        console.log(response2.results[0].name)
        fetchData(response2.results[0].origin.url)
        .then(response3 => console.log(response3.dimension))
        .catch(err3 => console.error(err3))
    })
    .catch(err2 => console.error(err2))
})
.catch(err => console.error(err))


//forma 2
fetchData(API)
.then(data => {
    console.log(data.info.count)
    return fetchData(API+data.results[0].id)
})
.then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then(data => {
    console.log(data.dimension)
})
.catch(err => console.error(err))