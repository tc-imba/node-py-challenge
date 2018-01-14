#!/usr/bin/node
const _ = require('lodash');
const util = require('../lib/util');

const data = util.readData('./data');
const reg = /[a-z][A-Z]{3}[a-z](?=[A-Z]{3}[a-z])/g;

// We use map here because JS doesn't support lookbehind assertion until now
const ans = _.map(data.match(reg), str => _.last(str)).join('');
console.log(ans);
