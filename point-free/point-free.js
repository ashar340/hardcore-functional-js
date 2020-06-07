"use strict";
const R = require('ramda');

//g(x) = f(x)
//g=f
var output = console.log.bind();
//HOF

var printIf = R.when(isShortEnough(msg))(output);

/* function printIf(shouldPrintIt) {
	return function(msg) {
		if (shouldPrintIt(msg)) {
			output(msg);
		}
	};
} */

function isShortEnough(str) {
	return str.length <= 5;
}

/* function isLongEnough(str) {
	return !isShortEnough(str);
} */

var isLongEnough = R.not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World