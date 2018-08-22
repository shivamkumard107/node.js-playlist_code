var fs = require('fs');

// //Synchronus request
//
// // Reading and writing files on computer
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
//
// //Write files
// fs.writeFileSync('writeMe.txt', readMe);

//Asynchronus request
// Reading and writing files on compute
fs.readFile('readMe.txt', 'utf8', function(err, data) {
  fs.writeFile('writeMe.txt', data);
});


//Write files
// fs.writeFileSync('writeMe.txt', readMe);
