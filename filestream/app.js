var fs = require('fs');

// writestream
var wstream = fs.createWriteStream('myOutput.txt');
wstream.write("Hello World!\n");
wstream.write("Another Line\n");
wstream.end();

// read
fs.readFile('myOutput.txt', 'utf8', function(err, contents){
	if(err)
		console.log(err);
	else
		console.log(contents); // this will only output on line of the file
});

// append
fs.appendFile("myAppend.txt", "MyMessage\n", function(err){
	if(err)
		console.log(err);
});

// append in stream
var astream = fs.createWriteStream("myAppendStream.txt", {'flags': 'a'});
astream.write("Initial line...\n");
astream.end();