module.exports = bitPrefixLen

// counts the length of the bit prefix.
// e.g. bitPrefixLen(new Buffer(00001010100), 0) == 4
function bitPrefixLen(buf, bit) {
  for (var i = 0; i < buf.length; i++) {
    for (var j = 0; j < 8; j++) {
      if ((buf[i] >> (7 - j)) & 0x1 != 0) {
        return i * 8 + j;
      }
    }
  }
  return buf.length * 8;
}
