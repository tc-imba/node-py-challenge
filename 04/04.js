#!/usr/bin/node
const http = require('http');

let ans;
let flag = true;

function get(query) {
  http.get(
    `http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=${query}`,
    res => {
      const {statusCode} = res;
      if (statusCode !== 200) {
        throw new Error('Request failed');
      }
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        console.log(rawData);
        const result = rawData.match(/\d+$/);
        if (result) {
          ans = parseInt(result[0]);
          get(ans);
        } else if (flag) {
          flag = false;
          ans /= 2;
          get(ans);
        }
      });
    },
  );
}

get(12345);
