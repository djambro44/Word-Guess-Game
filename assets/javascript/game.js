var currentWordDiv = document.getElementById("currentWord");
var remainingGuesses = 15;
var letterGuessed = document.getElementById("guessedLetters");
//wins
//losses

// array of answer words
var words = [
    "scorpion",
    "cactus",
    "snake",
    "coyote",
    "cowboy"
];

// picks random word from words array
var answerArray = [];
var placeHolder = [];
//array for function wrong
var incorrect = [];

//function to get _ for each character of var word
function initCurrentWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    answerArray = word.split("");
    for (var i = 0; i < word.length; i++) {
        placeHolder[i] = "_";
        document.getElementById("randomWord").innerHTML = placeHolder;
    }
}
initCurrentWord();


console.log(answerArray, placeHolder);




//gets user input and stores it as userGuess
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
}




//push wrong letter guesses 
function wrong() {
    remainingGuesses--;
    var remainingGuesses = document.getElementById("guessesLeft");
    userGuess.push(incorrect);
    var incorrect = document.getElementById("guessedLetters");
}
console.log(wrong);

//user guesses correctly
function right() {
    var placeHolder = []
    var userGuess = placeHolder.join("userGuess");
}

//game over function
function gameOver(){
    remainingGuesses = 0;
    letterGuessed = [];
    incorrect = [];
    //should I run the initCurrentWord function again? How?
}

// if (userGuess === placeHolder) {
//     function right() {
//         var placeHolder = []
//         var userGuess = placeHolder.join("userGuess");
// }
// } else {
//     function wrong() {
//         remainingGuesses--;
//         var remainingGuesses = document.getElementById("guessesLeft");
//         userGuess.push(incorrect);
//         var incorrect = document.getElementById("guessedLetters");
//     }
// }




