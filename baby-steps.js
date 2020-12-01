let args = process.argv.slice(2);
let sum = args.reduce(function(acc,curr){
  return +acc + +curr;
})
console.log(sum);
