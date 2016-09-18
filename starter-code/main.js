console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
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

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var newBoard = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newBoard.appendChild(newCard); // Add cards to the board
		newCard.setAttribute('data-card', cards[i]); 
		newCard.addEventListener('click', isTwoCards);
	}
}
function isTwoCards() {  // Compares the value of the 'data-card' selected, and assigns it an img that appears with the event listener 
	cardsInPlay.push(this.getAttribute('data-card')); 
	console.log(this.getAttribute('data-card'));  
		if(this.getAttribute('data-card') === 'queen') { 
			this.innerHTML = "<img src='queen image.png' />";
		}
		else {
			this.innerHTML = "<img src='king image.png' />";
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay); // Calls function isMatch with cardsInPlay as argument
		cardsInPlay = []; // Clears the cardsInPlay array after two cards are selected
	}
}
function isMatch(cardsInPlay) {  // Issue: alert with result appears before second card turns around
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Match found");
	}
	else {
		alert("No match here, try again");
	}
	for (var i = 0; i < cards.length; i++) { 
			document.getElementsByClassName('card')[i].innerHTML = " "; // To hide the img assigned, leaving it with the default div style and start over
		}
}
createBoard();
