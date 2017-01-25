const sleep = (wait_init)=>{

	const waitTill = new Date().getTime()+ (wait_init || 0);
	while(waitTill >= new Date().getTime()){};

	return;

};


const foo = async ()=>{

	await sleep(1200);	// 2s
	console.log('this is after await');

};

foo();