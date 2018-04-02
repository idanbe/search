var readdir = require('readdir-enhanced');
var fs = require('fs');
const path = require('path');
var absolutePath = path.resolve("Relative file path");

if (process.argv.length !== 4) {
  console.log('USAGE: node search [EXT] [TEXT]');
} else {
  var ext = process.argv[2];
  var text = process.argv[3];

  readdir(process.cwd(), {

    filter: `**/*.${ext}`,
    deep: true
  }, function(err, files) {

    if (err) {
      console.log(err);
      return;
    }

    if (files.length === 0) {
      console.log('No file was found');
    } else {
      files.forEach(file => {
        fs.readFile(file, function(err, data) {
          if (err) throw err;
          if (data.indexOf(text) >= 0) { //check if file contains string
            console.log(path.resolve(file));
          }
        });
      });
    }
  });
}