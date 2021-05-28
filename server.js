const connect = require('./database')

const res= connect("gaurang", "password")
console.log(res)

module.exports = res