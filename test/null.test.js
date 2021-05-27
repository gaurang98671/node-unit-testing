const getUserId = require('../getUserId')

test("Testing login", ()=>{
    expect(getUserId('gaurang', '123')).not.toBeNull()
    expect(getUserId('gaurang','1231')).toBeNull()
})