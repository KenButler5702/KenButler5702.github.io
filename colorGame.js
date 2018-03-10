


let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//Mode Buttons
	setUpModeButtons();
	//Set Up Square Buttons
	setUpSquares();
	//Reset
	reset();

}

function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			//Figure out Squares to show

			//Pick New Colors

			//Pick A New Picked Color

			//Update Page to Reflect Changes
			reset();

			});
		}

}
function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		//Add Click Listeners to Squares
		squares[i].addEventListener("click", function() {
			//Get Color
		let clickedColor = this.style.backgroundColor;
			//Compare to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try Again!';
			setInterval(function() {
			messageDisplay.classList.toggle("flash");
			}, 1000)
			}
		});
	}

}
function reset(){
	colors = generateRandomColors(numSquares);
	//Pick new Random Color from Array
	pickedColor = pickColor();
	//Change colorDisplay
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//Change colors of squares

	for(var i = 0; i < squares.length; i ++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//Reset h1 colors
	h1.style.backgroundColor = "steelblue";

}
resetButton.addEventListener("click", function() {
	reset();
});


function changeColors(color) {
	//loop through all squares
	//change each color to match color
	for(var i = 0; i < squares.length; i++) {
	//change each color to match color
	squares[i].style.backgroundColor = color;
	}

}
function pickColor() {
	let random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColors(num) {
	//Make an Array
	let arr = [];
	//Add num Random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
	arr.push(randomColor())
	}
	//Return array
	return arr;
}
function randomColor() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
