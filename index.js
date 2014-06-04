module.exports = bitPrefixLen

// counts the length of the bit prefix.
// e.g. bitPrefixLen(new Buffer(00001010100), 0) == 4
function bitPrefixLen(bit, buf) {
  if (!(buf instanceof Buffer))
    throw new Error('buf must be a buffer')

  if (bit !== 0 && bit !== 1)
    throw new Error('bit must be 1 or 0')

  for (var i = 0; i < buf.length; i++) {
    for (var j = 0; j < 8; j++) {
      if (((buf[i] >> (7 - j)) & 0x1) != bit) {
        return i * 8 + j;
      }
    }
  }
  return buf.length * 8;
}
