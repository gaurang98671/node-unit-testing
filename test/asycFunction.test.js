const testPromise = require('../Promise')

test("Testing promises", ()=>{
    
    return testPromise().then(data=>{
        expect(data).toBe(1)
    })
})