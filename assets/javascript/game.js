
// array of answer words
var words = [
    "sublime",
    "slightly stoopid",
    "pepper"
];


// picks random word from words array
var word = words[Math.floor(Math.random() * words.length)];

console.log(word);
console.log(words);

// matches number of underscores to length of the answer word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray);

function getCorrectLetters(){
for (var x = 0; x < word.length; x++) {
    return word.charAt(x);
}
}

var correctLetters = getCorrectLetters();

// var correctLetters = word.charAt(word.length-1);

console.log(correctLetter);

// document.onkeyup = function(event) {
//     if (hasFinshed) {
//         resetGame();
//         hasFinsihed = false;
//     } else {
//         if(event.keyCode >= 65 && event.keycode <= 90) {

//         }
//     }
// }




// // loop the will keep going as long as player has remaining guesses
// while (remainingGuesses > 0) {

// }