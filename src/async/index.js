const somethingAsync = () => {
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(()=>{
            resolve('Do async')
        }, 3000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async() =>{
    const something = await somethingAsync()
    console.log(something)
}

console.log('before')
doSomething();
console.log('after')

const anotherFunction = async () => {
    try{
        const something = await somethingAsync()
        console.log(something)
    }catch(error){
        console.error(error)
    }
}


console.log('before2')
anotherFunction();
console.log('after2')