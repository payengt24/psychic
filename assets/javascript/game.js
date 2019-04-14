console.log('here')
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letters = ["a", "b", "c"];
var letterToGuess = null;
var guessesSoFar = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;


var updateGuessesLeft = function () {
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
}

//generate a random letter for user to guess
var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
}

//
var updateGuessesSoFar = function () {
    document.querySelector('#guessesSoFar').innerHTML = guessesSoFar.join(", ");
}

var resetGame = function () {
    guessesLeft = 9;
    guessesSoFar = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar()
    console.log(letterToGuess);
}

updateGuessesLeft();
updateGuessesSoFar();
updateLetterToGuess()
console.log(letterToGuess);


document.onkeydown = function(event) {
    console.log(event.key)
    guessesLeft--;

    var letter = event.key.toLowerCase()

    guessesSoFar.push(letter)

    updateGuessesLeft();
    updateGuessesSoFar()

    if(letter === letterToGuess) {
        wins++
        document.querySelector('#wins').innerHTML = wins;
        resetGame()
    }

    if(guessesLeft === 0) {
        losses++
        document.querySelector('#losses').innerHTML = losses;
        resetGame()
    }
}

