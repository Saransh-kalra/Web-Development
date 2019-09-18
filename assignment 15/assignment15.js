function isEven(num){
	if(Number(num)%2==0){
		return("its even")
	}
	else
		return("its not even");
};

isEven(24);

function factorial(num){
	var factori=num;
	while(Number(num)!=1){
		factori*= (--num);
	}

	return factori;
};

factorial(3);

function kebabToSnake(string){
	var new_string=string;
	var replacement="_";
	var rep_index;

	for(var char=0;char<string.length;char++){
		if(string[char]=="-"){
			rep_index=char;
			new_string = new_string.substring(0,rep_index) + replacement + new_string.substring(rep_index+1); 
		}
	}

	return new_string;
};

kebabToSnake("ck-ty");