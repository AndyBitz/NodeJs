var d = new Promise((res, rej)=>{

	let x = 12;

	// use () => res(...) etc.
	// because it needs to be a function
	// and just using res(x) or rej(...) would have a return value
	// which is not a function
	setTimeout(() => res(x), 2000);
	setTimeout(() => rej(new Error('Error')), 1000);

	// of course this is just for setTimeout(...)
	// because it needs a function that will be executed
	// when the time has passed


});


d
	.then((x)=>{console.log(`done ${x}`)})
	.catch((x)=>{console.error(`${x}`)});


	// each then and catch could return another Promise and
	// set it equal to a new variable and make really complex things and stuff.