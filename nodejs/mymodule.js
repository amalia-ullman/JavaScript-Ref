const fs = require('fs');

module.exports = function(directory, filter, callback){
    fs.readdir(directory, 'utf8', function callback(err, data) {
        if(err){
            return err;
        }
        list.forEach(file => {
            if(file.split(".")[1] === filter){
                console.log(file);
            }
        })
        callback(null, data);
    })
}




