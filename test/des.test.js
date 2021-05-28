const User = require('../user')

const user = new User()


describe("Testing user class", ()=>{
    test("Testing getUser function",()=>{
       
        expect(user.getUser(1)).toEqual({
            userName: 'gaurang'
        })
    })
})