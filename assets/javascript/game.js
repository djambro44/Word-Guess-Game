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

//function to get _ for each character of var word
function initCurrentWord() {
    var word = words[Math.floor(Math.random() * words.length)];
    answerArray = word.split("");
    for (var i = 0; i < word.length; i++) {
        placeHolder[i] = "_";
        // document.getElementById("randomWord").innerHTML = placeHolder;
    }
}
initCurrentWord();
// document.getElementById("currentWord").innerText = placeHolder;

console.log(answerArray, placeHolder);

// placeHolder = document.getElementById("currentWord");


//gets user input and stores it as userGuess
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
}




//push wrong letter guesses 
function wrong() {
    remainingGuesses--;
    letterGuessed.push(userGuess);
}
console.log(wrong);



