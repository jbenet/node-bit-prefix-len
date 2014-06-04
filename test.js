var test = require('tape')
bitPrefixLen = require('./index')

test('0', function(t) {
  t.equal(bitPrefixLen(0, new Buffer('0000abc00abc', 'hex')), 4 * 4)
  t.equal(bitPrefixLen(0, new Buffer('000000000000', 'hex')), 12 * 4)
  t.equal(bitPrefixLen(0, new Buffer('ffffffffffff', 'hex')), 0)
  t.equal(bitPrefixLen(0, new Buffer('800000000000', 'hex')), 0)
  t.equal(bitPrefixLen(0, new Buffer('000000000001', 'hex')), 12 * 4 - 1)
  t.equal(bitPrefixLen(0, new Buffer([4, 12, 12])), 5)
  t.end()
})

test('1', function(t) {
  t.equal(bitPrefixLen(1, new Buffer('ffff00c00abc', 'hex')), 4 * 4)
  t.equal(bitPrefixLen(1, new Buffer('ffffffffffff', 'hex')), 12 * 4)
  t.equal(bitPrefixLen(1, new Buffer('000000000000', 'hex')), 0)
  t.equal(bitPrefixLen(1, new Buffer('800000000000', 'hex')), 1)
  t.equal(bitPrefixLen(1, new Buffer('000000000001', 'hex')), 0)
  t.equal(bitPrefixLen(1, new Buffer('fffffffffffe', 'hex')), 12 * 4 - 1)
  t.equal(bitPrefixLen(1, new Buffer('11111111111e', 'hex')), 0)
  t.equal(bitPrefixLen(1, new Buffer([255, 128, 12, 12])), 9)
  t.end()
})
