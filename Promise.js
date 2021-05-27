function testPromise(){
    return new Promise((resolve, reject)=>{
        console.log("Processing")
        resolve(1)
    })
}


module.exports = testPromise