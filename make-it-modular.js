const mymodule = require('./mymodule.js');

let callback = function(err, data){
  if(err){
    return console.error(err);
  }
  data.forEach(function(elem){
    console.log(elem);
  })
}

mymodule(process.argv[2], process.argv[3], callback);
