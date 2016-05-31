function myCallback(data)
{
	console.log("myCallback : "+data+"\n");
}

function useSomething(callback)
{
	callback('This is the parameter used in the callback() objekt');
	/*
	simulates:
		myCallback('This is the parameter used in the callback() objekt');

		because myCallback is used as a parameter
	*/
}

useSomething(myCallback);
// output:
// myCallback : This is the parameter used in the callback() objekt

/*
* if you use a function as a parameter
* you can use the parameter as the function
* that will be used
*/

/*
* instead of passing a function as parameter
* we can create a function as parameter
*/

useSomething(function(data){
	console.log("what is this: "+data+"\n");
	// output -> what is this: This is the parameter used in the callback() objekt
});