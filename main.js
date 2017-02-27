console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
 
var board = document.getElementByID('game-board');
function createBoard() {
	for (var i = 0; i<cards.length; i++) {
		  var cardElement=document.createElement('div');
		  cardElement.className= 'card';
		  cardElement.setAttribute('data-card', cards[i]);
	}
	for (var i=0; i < cards.length; i++) {
		cardElement.addEventListener('click', isTwoCards);
	}
}

function createCards() {
	for (var i = 0; i<cards.length; i++) {
  var cardElement=.createElement('div')
  cardElement.className= 'card';
}

board.appendChild(cardElement);
board.appendChild(cardElement);


}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	this.innerHTML = '<img src = "king.png" alt= "King">';
} else {
	this.innerHTML = '<img src = "queen.png" alt = "Queen">';
}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = []
	}
	
}
function isMatch(cards) {
if (cards[0] === cards[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
	}
}


