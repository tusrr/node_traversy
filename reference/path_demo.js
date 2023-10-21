const path = require('path');

//base file name
console.log('-------')
console.log(__filename)
console.log(path.basename(__filename));

console.log('-------')

//dir name
console.log(path.dirname(__filename));
console.log('-***********-')

//file extension
console.log(path.extname(__filename))

console.log('-***********-')
//create path object
console.log(path.parse(__filename))

console.log('-***********-')
//..test/hello.html

console.log(path.join(__dirname,'test','hello.html'))