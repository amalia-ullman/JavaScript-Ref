const fs = require('fs');

module.exports = function(directory, filter, callback){
    fs.readdir(directory, 'utf8', (err, data) => {
        let fileArray = [];
        if(err){
            return callback(err);
        }
        data.forEach(file => {
            if(file.split(".")[1] === filter){
                fileArray.push(file);
            }
        })
        callback(null, fileArray);
    })
}




