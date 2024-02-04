

const directory = process.argv[2];
const filter = process.argv[3];

foo(function (err, data){
    if (err) { return callback(err)};
    callback(null, data);
})