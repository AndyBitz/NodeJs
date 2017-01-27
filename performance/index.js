const test = require('./test.js');

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

// add tests
suite.add('switch', function () {
	test.t_switch();
})
.add('array', function () {
	test.t_array();
})
.add('object', function () {
	test.t_object();
})
.on('cycle', function (e) {
	console.log('cycle - ' + String(e.target));
})

.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({'async': true});

// test.t_object()();
// test.t_array()();
// test.t_switch()();