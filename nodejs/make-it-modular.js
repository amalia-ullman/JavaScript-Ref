const mymodule = require('./mymodule.js');

const directory = process.argv[2];
const filter = process.argv[3];

// foo(function (err, data){
//     if (err) { return callback(err)};
//     callback(null, data);
// })

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if(err){
        return err;
    }
    data.forEach(file => {
        console.log(file);
    })
});