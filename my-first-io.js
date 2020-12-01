const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2], 'utf8');
console.log(buffer.toString().match(/\n/g).length);


/*
const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const result = buffer.toString().split('\n').length - 1;
console.log(result);
*/
