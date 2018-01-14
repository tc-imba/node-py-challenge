#!/usr/bin/node
const _ = require('lodash');

const str = `g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.`;
const url = 'map';

function maketrans(str) {
  const _a = 'a'.charCodeAt(0);
  const _z = 'z'.charCodeAt(0);
  return _.map(str, c => {
    const code = c.charCodeAt(0);
    if (code >= _a && code <= _z) {
      //console.log(1);
      return (String.fromCharCode((code - _a + 2) % 26 + _a))[0];
    } else {
      return c;
    }
  }).join('');
}

console.log(maketrans(str));
console.log(maketrans(url));
