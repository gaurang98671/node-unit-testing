const getUserId = require('../getUserId')

test("Testing login", ()=>{
    expect(getUserId('gaurang', '123')).not.toBeNull()
    expect(getUserId('gaurang','1231')).toBeNull()
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });