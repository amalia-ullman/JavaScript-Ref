const fs = require('fs');

const directory = process.argv[2];
const filter = process.argv[3];

fs.readFile(directory, 'utf8', (err, data) => {
    if(err){
        return err;
    }
    data.split('\n').forEach(file => {
        if(file.substr(file.length-4) == "."+filter){
            console.log(file + '\n');
        }
    })
})
