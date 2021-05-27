const getData = require('../getData')

test("Testing get data", ()=>{
    data = getData()
    expect(data).toEqual({
        name: 'gaurang',
        id: 123
    })
})