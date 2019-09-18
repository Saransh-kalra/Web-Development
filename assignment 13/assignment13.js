console.log("Printing all numbers from -10 to 19");

var num=-10;
while(num<20){
	console.log(num);
	num++;
}

console.log("Printing all even numbers from 10 to 40");
num=10;
while(num<41){
	console.log(num);
	num+=2;
}

console.log("Printing all odd numbers from 300 to 333");
num=301;
while(num<334){
	console.log(num);
	num+=2;
}

console.log("Printing all numbers divisible by 3 and 5 from 5 to 50");
num=5;
while(num<50){
	if((num%3===0) && (num%5==0)){
		console.log(num);
	}
	num++;
}