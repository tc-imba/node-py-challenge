#!/usr/bin/node
const fs = require('fs');
const zip = require('zip');

const data = fs.readFileSync('./channel.zip');
const reader = zip.Reader(data);

const map = {};

reader.forEach(entry => {
  map[entry.getName()] = {
    content: entry.getData().toString(),
    comment: entry.getComment()
  }
});

let ans = '';

function get(number) {
  const filename = `${number}.txt`;
  const data = map[filename];
  const result = data.content.match(/\d+$/);
  if (result) {
    ans += data.comment;
    get(parseInt(result[0]));
  } else {
    console.log(data.content);
  }
}

get(90052);
console.log(ans);

