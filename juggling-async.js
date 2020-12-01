const http = require('http');
const bl = require('bl');
const async = require('async');

const urls = process.argv.slice(2);


async.eachSeries(urls, (url, next)=> {
    http.get(url, response => {
    response.pipe(bl((err,data) =>{
      if(err) return next(err);
      data = data.toString();
      console.log(data);
      next();
}))
})
})
  // callback hell solution
/*
  http.get(urls[0], response => {
    response.pipe(bl((err,data) =>{
      if(err) return console.error(err);
      data = data.toString();
      console.log(data);

      http.get(urls[1], response => {
        response.pipe(bl((err,data) =>{
          if(err) return console.error(err);
          data = data.toString();
          console.log(data);

          http.get(urls[2], response => {
            response.pipe(bl((err,data) =>{
              if(err) return console.error(err);
              data = data.toString();
              console.log(data);
            }))
          })
        }))
      })
    }))
  })
*/
