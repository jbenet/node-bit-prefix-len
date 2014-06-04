var test = require('tape')
bitPrefixLen = require('./index')

test('basic', function(t) {
  t.equal(bitPrefixLen(new Buffer('0000abc00abc', 'hex')), 4 * 4)
  t.equal(bitPrefixLen(new Buffer('000000000000', 'hex')), 12 * 4)
  t.equal(bitPrefixLen(new Buffer('000000000001', 'hex')), 12 * 4 - 1)
  t.equal(bitPrefixLen(new Buffer([4, 12, 12])), 5)
  t.end()
})
