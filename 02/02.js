#!/usr/bin/node
const _ = require('lodash');
const util = require('../lib/util');

const data = util.readData('./data');
const map = {};

_.forEach(data, c => {
  if (map.hasOwnProperty(c)) {
    map[c]++;
  } else {
    map[c] = 1;
  }
});

let min = Infinity;
_.forEach(map, val => min = Math.min(min, val));

const ans = _.map(map, (val, key) => {
  if (val === min) {
    return key;
  } else {
    return '';
  }
}).join('');

console.log(ans);
