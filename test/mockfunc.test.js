const add = require('../mathFunc')
const doAdd = require('../caller')

jest.mock('../mathFunc.js')
test("Testing add function",()=>{
    doAdd(1,2)
    expect(add).toHaveBeenCalledWith(1,2)
})