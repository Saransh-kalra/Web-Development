
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1,2,3,4]);
printReverse(["a","b","c"]);

function isUniform(arr) {
	var value = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== value) {
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(ele) {
		sum += ele;
	}) 
	return sum;
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}


max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

