const fs = require('fs');
const _ = require('lodash');

module.exports = {
  readData: function(path) {
    const data = fs.readFileSync(path, 'utf-8');
    return data.split('\n').join('');
  }
};