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
    "cowboy"
];

// empty arrays
var answerArray = [];
var placeHolder = [];
//array for function wrong
var incorrect = [];
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

function checkUserGuess () {
// 1) check user guess against answerArray
//      a) if true - update placeholder to show userGuess(right)
//              I) if placeHolder ==== answerArray trigger Congrats
//      b) if false - add userGuess to letterGuessedDiv(wrong)

}



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
    //UserGuess append placeHolder
    //
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




