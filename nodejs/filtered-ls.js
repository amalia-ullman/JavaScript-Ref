const fs = require('fs');

const directory = process.argv[2];
const filter = process.argv[3];

fs.readdir(directory, 'utf8', function callback(err, list) {
    if(err){
        return err;
    }
    list.forEach(file => {
        if(file.split(".")[1] === filter){
            console.log(file);
        }
    })
})
