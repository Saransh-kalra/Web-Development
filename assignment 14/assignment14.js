console.log("Printing all numbers from -10 to 19");
for(var i=-10; i<20;i++){
	console.log(i);
}

console.log("Printing all even numbers from 10 to 40");
for(var i=10; i<=40;i+=2){
	console.log(i);
}


console.log("Printing all odd numbers from 300 to 333");
for(var i=301; i<=333;i+=2){
	console.log(i);
}


console.log("Printing all numbers divisible by 3 and 5 from 5 to 50");
for(var i=5; i<=50;i++){
	if((i%3===0) && (i%5==0)){
		console.log(i);
	}
}
