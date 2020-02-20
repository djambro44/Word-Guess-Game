var currentWordDiv = document.getElementById("randomWord");
var remainingGuessesDiv = document.getElementById("guessesLeft")
var remainingGuesses = 15;
var letterGuessedDiv = document.getElementById("guessedLetters");
//wins
//losses

// array of answer words
var words = [
    "scorpion",
    "cactus",
    "snake",
    "coyote",
    "cowboy",
    "tumbleweed"
];

// empty arrays
var answerArray = [];
var placeHolder = [];
//array for function wrong
var incorrect = [];
//saves userGuess globally
var userGuess;

//function to get _ for each character of var word
function initCurrentWord() {
    currentWordDiv.innerHTML = "";
    placeHolder = [];
    var word = words[Math.floor(Math.random() * words.length)];
    answerArray = word.split("");
    for (var i = 0; i < word.length; i++) {
        placeHolder[i] = "_";
    }
    currentWordDiv.innerHTML = placeHolder;
    console.log(answerArray, placeHolder);
}
initCurrentWord();

//gets user input and stores it as userGuess
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    checkUserGuess();
}

// function fillWordWithLetter(userGuess, answerArray) {
//     answerArray.split('').map(userGuess => {
//         if (userGuess === answerArray) {
//             return userGuess.toUpperCase()
//         }
//     }).join(' ')
// }
// fillWordWithLetter();

// function fillWordWithLetter(){
//     // var correctGuesses = answerArray.map(userGuess);
//     document.getElementById("currentWordDiv").innerHTML = answerArray.find(userGuess);
// }
// fillWordWithLetter();

// function fillWordWithLetter() {
//     var correctGuesses = answerArray.find(userGuess);
//     if (true) {
//         answerArray.join(userGuess);
//     }
// }
// fillWordWithLetter();

//makes letters guessed and number of guesses boxes work....not affecting placeHolder or answerArray still
function checkUserGuess() {
    if (userGuess === answerArray) {
        right();
    } else {
        wrong();
    }
}
checkUserGuess();



//push wrong letter guesses 
function wrong() {
    remainingGuesses--;
    console.log(remainingGuesses);
    remainingGuessesDiv.textContent = remainingGuesses;
    incorrect.push(userGuess);
    letterGuessedDiv.innerHTML = incorrect;
}
wrong();

//user guesses correctly
function right() {
    answerArray;
    var correctGuess = answerArray.join(userGuess);
    // currentWordDiv.innerHTML = correctGuess;
}
right();
console.log(right());



if (remainingGuesses === 0) {
    gameOver();
}

//game over function
function gameOver() {
    remainingGuesses = 0;
    letterGuessed = [];
    incorrect = [];
    currentWordDiv.innerHTML = "Game Over!";
}



