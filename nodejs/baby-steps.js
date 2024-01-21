const temp = process.argv;
var sum = 0;
for(var x = 2; x < temp.length; x++){
    sum += Number(temp[x]);
}
console.log(sum);