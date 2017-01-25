const prom = new Promise((res, rej)=>{
	// function
	// console.log(typeof res);

	// function
	// console.log(typeof rej);
	
	// call function
	// res();	// will be .then
	// or
	// rej();	// will be .catch

	// call function with parameters
	// res(x);
	// or
	// rej(x);

	// rej('error');
		// rej will call the funcion given in catch(here) with the given parameter(s)
	res('hello world');
		// res will call the function given in then(here) with the given paremter(s)


});

// object
// console.log('Prom - ' + typeof prom);

prom
	.then((x)=>{
		console.log(x);
	})
	.catch((err)=>{
		console.log(err);
	});