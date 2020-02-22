// make variabels
//     userGuess 
var userGuess;

//     words - array 
var words = [
    "scorpion",
    "cactus",
    "snake",
    "coyote",
    "cowboy",
    "tumbleweed"
];
//     selected word 
var selectedWord;

// split selected word
var splitSelectedWord

// selected word _'s 
var underscores = [];

//selected word div
var selectedWordDiv = document.getElementById("randomWord");

//     incorrect guess 
var incorrectGuess;

//     correct guess 
var correctGuess;

//     remaining guesses Div
var remainingGuessesDiv = document.getElementById("guessesLeft");

//      remaining guesses
var remainingGuesses = 15;

//     incorrect guesses 
var incorrectGuessesDiv = document.getElementById("guessedLetters");

// incorrected guesses
var incorrectGuess = [];

//     wins 
var wins;

//     losses 
var losses;

// make functions 

// start game
function startGame() {
    remainingGuesses = 15;
    document.getElementById("guessesLeft").textContent = remainingGuesses;
    incorrectGuesses = [];
    getRandomWord();
}


//     selecting random word from word array and  
function getRandomWord() {
    var selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
    //      split that word into individual characters
    var splitSelectedWord = selectedWord.split("");
    console.log(splitSelectedWord);
    //     setting _ for each character in selected word
    for (i = 0; i < selectedWord.length; i++){
        underscores[i] = "_";
        selectedWordDiv.innerHTML = underscores;
    }
    console.log(underscores);
    selectedWordDiv.innerHTML = underscores;
}



//     get user input 
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
}

// when userGuess !== splitSelectedWord
function wrongGuess() {
    remainingGuesses--;
    remainingGuessesDiv.textContent = remainingGuesses;
    incorrectGuess.push(userGuess);
    incorrectGuessesDiv.innerHTML = incorrectGuess;
    console.log(remainingGuesses, incorrectGuess);
}








//     check if user input matches currect word single character 
if (userGuess === splitSelectedWord) {
    //         if yes - place correct guess  in place of _ 
    underscores.join(userGuess);
} else {
    wrong();
    //         if no - user losses a guess and incorrect guess is stored as incorrect guess 
    incorrectGuesses.join(userGuess);
}


//     if user guesses all correct letters - add one to wins 

//     if user runs out of guesses prompt game over 

