"use strict";

function doSomething() {

	this.xhttp = new XMLHttpRequest();

	this.xhttp.onreadystatechange = function() {

		console.log(this);

		if (this.readyState == this.DONE) {
			console.log(this.response);
			console.log(this.responseText);
		}
	}

	this.xhttp.open("POST", "/readme.json", true);
	this.xhttp.setRequestHeader("Content-type", "text/plain");
	this.xhttp.send("hello world");

}

var d = new doSomething();