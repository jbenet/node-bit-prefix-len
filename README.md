# bit-prefix-len

Returns the bit prefix length of a buffer -- the number of consecutive 0s or 1s. This is useful for all sorts of crypto things.

```js
> var bitPrefixLen = require('bit-prefix-len')
> bitPrefixLen(0, new Buffer('0000abc00abc', 'hex'))
16
> bitPrefixLen(0, new Buffer('800000000000', 'hex'))
0
> bitPrefixLen(1, new Buffer('fffffffffffe', 'hex'))
47
> bitPrefixLen(1, new Buffer('ff00', 'hex'))
8
```
