var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var Resetbutton = document.querySelector("#reset");
var numInput = document.querySelector("input")

var p1Disp = document.querySelector("#p1Display");
var p2Disp = document.querySelector("#p2Display");
var WinScoreDisp = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var WinningScore = 5;
var gameOver = false;

p1button.addEventListener("click", function() {
	if(!gameOver) {
		p1score++;
		if(p1score === WinningScore) {
			gameOver = true;
			p1Disp.classList.add("winner");
		}
		p1Disp.textContent = p1score;
	}
});

p2button.addEventListener("click", function() {
	if(!gameOver) {
		p2score++;
		if(p2score === WinningScore) {
			gameOver = true;
			p2Disp.classList.add("winner");
		}
		p2Disp.textContent = p2score;
	}
});

Resetbutton.addEventListener("click", function(){
	reset();
});

function reset() {
	p1score = p2score = 0;
	gameOver = false;
	p1Disp.classList.remove("winner");
	p2Disp.classList.remove("winner");
	p1Disp.textContent = p1score;
	p2Disp.textContent = p2score;
	gameOver = false;
}

numInput.addEventListener("change", function() {
	WinScoreDisp.textContent = numInput.value;
	WinningScore = Number(numInput.value);
	reset();
});