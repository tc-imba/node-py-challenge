#!/usr/bin/node
const fs = require('fs');
const pickle = require('pickle');
const _ = require('lodash');

const data = fs.readFileSync('./banner.p');
pickle.loads(data, origin => {
  _.forEach(origin, line => {
    const str = _.map(line, val => {
      return _.repeat(val[0], val[1]);
    }).join('');
    console.log(str);
  });
});
