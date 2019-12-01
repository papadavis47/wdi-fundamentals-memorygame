// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardTwo)
// console.log("User flipped " + cardFour)

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardTwo)

if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}