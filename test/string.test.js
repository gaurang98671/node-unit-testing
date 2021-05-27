const getUrl = require('../getUrl')

test("Testing url", ()=>{
    expect(getUrl()).toMatch(/v1/)
    expect(getUrl()).not.toMatch(/v2/)
})

