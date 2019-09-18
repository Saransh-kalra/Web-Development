var age = prompt("Enter your age: ");

if(age<0){
	alert("The age can't be negative");
}
if(age==21){
	console.log("Happy 21st birthday");
}
if(age%2==1){
	console.log("Your age is odd!");
}
if(Math.sqrt(age)%1===0){
	console.log("Your age is a perfect square");
}