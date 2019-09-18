 var number = Number(prompt("what is your guess number?"));
 if(number<7){
 	alert("Your guess is lower than the actual number!");
 }
 else if(number===7){
 	alert("you guessed the number! congratulations!");
 }
 else{
 	alert("Your guess is higher than the actual number!");
 }