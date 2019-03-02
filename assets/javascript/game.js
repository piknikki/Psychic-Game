
var winsCount = 0;
var lossesCount = 0;
var wrongCount = 0;
var guessesLeftCount = 10;
var guessesSoFarArray = [];
var randomLetter = "";

function randomLetterGenerator() {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    // pick random letter
    randomLetter = alpha[Math.floor(Math.random() * 26) + 1];
    return randomLetter;
}


function updateScore() {
    document.querySelector("#wins-text").innerHTML = "Wins: " + winsCount;
    document.querySelector("#losses-text").innerHTML = "Losses: " + lossesCount;
    document.querySelector("#userchoice-text").innerHTML = "Guesses Left: " + guessesLeftCount;
    document.querySelector("#guesses-text").innerHTML = "Your Guesses so far: " + guessesSoFarArray;
}

function updateGuesses() {
    document.querySelector("#userchoice-text").innerHTML = "Guesses Left: " + guessesLeftCount;
    document.querySelector("#guesses-text").innerHTML = "Your Guesses so far: " + guessesSoFarArray;

}

// run function to generate a letter
randomLetterGenerator();
console.log(randomLetterGenerator());

// update guesses every time a guess is made
updateGuesses();

// update score when a win or loss is logged
updateScore();

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();

    if (userGuess === randomLetter) {

        winsCount++;
        guessesLeftCount = 10;
        guessesSoFarArray = [];
        updateScore();
        randomLetterGenerator();


    } else {

        guessesSoFarArray.push(userGuess);
        updateGuesses();
        wrongCount++;
        guessesLeftCount--;
        if (guessesSoFarArray.length === 10) {
            lossesCount++;
            guessesLeftCount = 10;
            wrongCount = 0;
            guessesSoFarArray = [];
            updateScore();
            randomLetterGenerator();

        }
    }



};