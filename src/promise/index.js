const something = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hecho')
        } else {
            reject('no hecho')
        }
    })
}

something()
.then(response => console.log(response))
.catch(err => console.error(err))

const something2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(()=>{
                resolve('true')
            },2000)
        }else {
            const error = new Error('mal')
            reject(error)
        }
    })
}

something2()
.then(response => console.log(response))
.catch(err => console.error(err))

Promise.all([something(), something2()])
.then(response=>{
    console.log('Array of results',response)
})
.catch(err => console.error(err))