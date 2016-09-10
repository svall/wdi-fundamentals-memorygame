console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour) {
	alert("Sorry, try again")
} 
else if (cardTwo === cardThree) {
	alert("Sorry, try again")
} 
else if (cardTwo === cardOne) {
	alert("Match found")
} 
else if (cardOne === cardThree) {
	alert("Sorry, try again")
} 
else if (cardOne === cardFour) {
	alert("Sorry, try again")
} 
else if (cardThree === cardFour) {
	alert("Match found")
};*/


var newBoard = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newBoard.appendChild(newCard);
	}
}

createBoard();
