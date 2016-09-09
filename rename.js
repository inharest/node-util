var path = require("path");
var fs = require("fs");
var rootPath = __filename;
var dir = path.dirname(rootPath);

fs.readdir(dir, function(error, files) {
    var len = files.length;
    var file = null;
    for (var i = 0; i < len; i++) {
        file = files[i];
        console.log(file);
        var nfile = file.replace("", "");
        fs.rename(file, nfile, function(error) {
            if (!error) {
                console.log("success!");
            }
        });
    }
});
