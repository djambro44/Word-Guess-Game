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
var splitSelectedWord;

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

var numBlanks = [];

//     wins 
var wins;

//     losses 
var losses;

var blanksAndSuccesses;

// make functions 

// start game
function startGame() {
    remainingGuesses = 15;
    document.getElementById("guessesLeft").textContent = remainingGuesses;
    incorrectGuesses = [];
    getRandomWord();
    checkUserGuess();
    endOfGame();
}


//     selecting random word from word array and  
function getRandomWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
    //      split that word into individual characters
    splitSelectedWord = selectedWord.split("");
    console.log(splitSelectedWord);
    //new numBlanks var
    numBlanks = splitSelectedWord;
    blanksAndSuccesses = [];
    underscores = [];
    //     setting _ for each character in selected word
    for (i = 0; i < selectedWord.length; i++){
        // blanksAndSuccesses.push(underscores);
        underscores[i] = "_";
        selectedWordDiv.innerHTML = underscores;
        console.log(blanksAndSuccesses)
    }
    
    console.log(underscores);
    selectedWordDiv.innerHTML = underscores;
    //this is not working
    // document.getElementById("randomWord").innerHTML = blanksAndSuccesses.join(" ");
}



//     get user input 
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    checkUserGuess();
}

function checkUserGuess (userGuess){
    // for (i = 0; i < selectedWord; i++) {
        if (userGuess === splitSelectedWord){
            document.getElementById("randomWord").innerHTML = userGuess;
            console.log(selectedWord);
        } else {
            // document.getElementById("guessedLetters").innerHTML = userGuess;
        wrongGuess();
        }
    // }
};

// when userGuess !== splitSelectedWord
function wrongGuess() {
    remainingGuesses--;
    remainingGuessesDiv.textContent = remainingGuesses;
    incorrectGuess.push(userGuess);
    incorrectGuessesDiv.innerHTML = incorrectGuess;
    console.log(remainingGuesses, incorrectGuess);
};

function endOfGame() {
   if (remainingGuesses === 0) {
       alert("Game Over!");
   };
};







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

