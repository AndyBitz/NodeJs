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

	console.log(this.req.method + " - " + this.req.connection.remoteAddress + " - " + this.req.url);

	this.getBodyData();
	this.req.on('end', () => {
		this.body = Buffer.concat(this.body).toString();
		this.setHeaderType();
		this.sendContents();
	});
	
	
};

myServer.prototype.sendContents = function() {

	const path = 'public/' + (this.req.url==='/' ? 'index.html' : this.req.url);

	console.log(path);

	if (this.req.method == "POST") {
		console.log("\n");
		console.log(this.req.method + " - " + this.req.connection.remoteAddress + " - " + this.req.url);

		console.log(this.body);
		console.log("\n");
	}

	fs.readFile(path, (err, contents) => {
		if (err) {
			this.res.writeHead(404, this.contentHead);
			this.res.end("404 - Error");
		} else {
			if (this.contentHead['Content-Type'].match(/image/g)) {
				// does not work
				// this.contentHead['Content-Length'] = contents.length;
				this.res.writeHead(200, this.contentHead);
				this.res.end(contents);
			} else {
				this.res.end(contents);
			}
			
		}
	});

};

myServer.prototype.setHeaderType = function() {

	if (this.req.url === '/') {

		this.contentHead = {"Content-Type":"text/html"};

	} else {

		if (this.req.url.match(/\.html$/g))
			this.contentHead = {"Content-Type":"text/html"};
		else if (this.req.url.match(/\.js$/g))
			this.contentHead = {"Content-Type":"text/javascript"};
		else if (this.req.url.match(/\.json$/g))
			this.contentHead = {"Content-Type":"application/json"};
		else if (this.req.url.match(/\.jpg$/g))
			this.contentHead = {"Content-Type":"image/jpeg"};
		else if (this.req.url.match(/\.png$/g))
			this.contentHead = {"Content-Type":"image/png"};
		else
			this.contentHead = {"Content-Type":"text/plain"};

	}

	this.res.writeHead(200, this.contentHead);

};

myServer.prototype.getBodyData = function() {

	this.body = [];
	this.req.on('data', function(chunk){
		this.body.push(chunk);
	}.bind(this));

};

var s = new myServer();