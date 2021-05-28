const add = require('../mathFunc')
const doAdd = require('../caller')
const connect = require('../database')
const server = require('../server')
jest.mock('../mathFunc.js')
test("Testing add function",()=>{
    doAdd(1,2)
    expect(add).toHaveBeenCalledWith(1,2)
})

function testMockCallback(val, callback){
    newVal = val + 1
    callback(newVal)
}

const mockCallback = jest.fn(x=> x+1)

test("Testing mock callback", ()=>{
    testMockCallback(1, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(1)
    expect(mockCallback.mock.calls[0][0]).toBe(2)
    expect(mockCallback.mock.results[0].value).toBe(3)
})

//mock implememtations
const mockFunc = jest.fn(()=>"dafault").mockImplementationOnce(()=>"First").mockImplementationOnce(()=>"Second")
console.log(mockFunc(),mockFunc(),mockFunc())


//mock name
const mockFunc2 = jest.fn().mockImplementation(scalar=> 100 + scalar).mockName("testMock")

console.log(mockFunc2(100), mockFunc2())


//Testing database
jest.mock('../database.js')
test("Testing database connection", ()=>{

    expect(connect.mock.calls.length).toBe(1)
    expect(connect).toHaveBeenCalledWith("gaurang", "password")
    expect(connect).toHaveBeenCalled()
})