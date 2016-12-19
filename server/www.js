var http = require('http');
var fs = require('fs');


/*

var server = http.createServer(function (req, res) {

	this.contentHead;

	if (req.url.match(/html/g))
		contentHead = {"Content-Type":"text/html"};
	else if (req.url.match(/js/g))
		contentHead = {"Content-Type":"text/javascript"};
	else
		contentHead = {"Content-Type":"text/plain"};


	res.writeHead(200, contentHead);
	sendFile(res, req.url);
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");

function sendFile(res, name) {

	let path = 'public/' + name;

	fs.readFile(path, 'utf8', (err, contents) => {
		if (err) {
			console.log("\n" + err);
			res.end("404 - Error");
		} else {
			res.end(contents);
		}
	});
}


*/


function myServer() {

	this.server = http.createServer(this.serverCallback.bind(this));
	this.server.listen(3000);
}

myServer.prototype.serverCallback = function(req, res) {
	this.req = req;
	this.res = res;
	this.setHeaderType();	
	this.sendContents();
};

myServer.prototype.sendContents = function() {

	let path = 'public/' + this.req.url;

	fs.readFile(path, 'utf8', (err, contents) => {
		if (err) {
			this.res.writeHead(404, this.contentHead);
			this.res.end("404 - Error");
		} else {
			this.res.end(contents);
		}
	});

};

myServer.prototype.setHeaderType = function() {

	if (this.req.url.match(/\.html$/g))
		this.contentHead = {"Content-Type":"text/html"};
	else if (this.req.url.match(/\.js$/g))
		this.contentHead = {"Content-Type":"text/javascript"};
	else if (this.req.url.match(/\.json$/g))
		this.contentHead = {"Content-Type":"application/json"};
	else
		this.contentHead = {"Content-Type":"text/plain"};

	this.res.writeHead(200, this.contentHead);

};

var s = new myServer();