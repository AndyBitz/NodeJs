var http = require('http');
var fs = require('fs');

const PORT = 3000;

function myServer() {

	this.server = http.createServer(this.serverCallback.bind(this));
	this.server.listen(PORT);
}

myServer.prototype.serverCallback = function(req, res) {
	this.req = req;
	this.res = res;
	this.getBodyData();
	this.req.on('end', () => {
		this.body = Buffer.concat(this.body).toString();
		this.setHeaderType();
		this.sendContents();
	});
	
	
};

myServer.prototype.sendContents = function() {

	let path = 'public/' + this.req.url;

	if (this.req.method == "POST") {
		console.log("\n");
		console.log(this.req.method + " - " + this.req.connection.remoteAddress + " - " + this.req.url);

		console.log(this.body);
		console.log("\n");
	}

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

myServer.prototype.getBodyData = function() {

	this.body = [];
	this.req.on('data', function(chunk){
		this.body.push(chunk);
	}.bind(this));

};

var s = new myServer();