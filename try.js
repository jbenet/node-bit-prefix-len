var bitPrefixLen = require('./index')
var log = console.log
log(bitPrefixLen(0, new Buffer('0000abc00abc', 'hex')))
log(bitPrefixLen(0, new Buffer('800000000000', 'hex')))
log(bitPrefixLen(1, new Buffer('fffffffffffe', 'hex')))
log(bitPrefixLen(1, new Buffer('ff00', 'hex')))
