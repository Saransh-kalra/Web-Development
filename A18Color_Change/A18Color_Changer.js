var isWhite = true; 

document.querySelector("button").addEventListener("click", function() {
	if(isWhite)  {
		document.body.style.background = "purple";
		isWhite = false;
	}
	else {
		document.body.style.background = "white";
		isWhite = true;
	}
});	