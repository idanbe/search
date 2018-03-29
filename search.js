var readdir = require('readdir-enhanced');
const path = require('path');
var absolutePath = path.resolve("Relative file path");

if (process.argv.length !== 4) {
  console.log('USAGE: node search [EXT] [TEXT]');
} else {
  var ext = process.argv[2];
  var text = process.argv[3];

  readdir(process.cwd(), {
    filter: `**/*${text}*.${ext}`,
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
        console.log(path.resolve(file));
      });
    }
  });
}