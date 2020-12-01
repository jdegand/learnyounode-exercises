const fs = require('fs');

const contents = fs.readFile(process.argv[2], 'utf8', function (err,data){
  if(err) {
    return console.error(err);
  }
    console.log(data.match(/\n/g).length)
})

//console.log('I am at the bottom of the file.')
