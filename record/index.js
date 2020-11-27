const record = require('./record')

;(async () => await record(process.argv.slice(2, process.argv.length)))()
