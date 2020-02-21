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
//     incorrect guess 
var incorrectGuess;
//     correct guess 
var correctGuess;
//     remaining guesses 
var remainingGuesses;
//     incorrect guesses 
var incorrectGuesses;
//     wins 
var wins;
//     losses 
var losses;
// make functions 
//     selecting random word from word array and  
function getRandomWord() {
    var selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
    //      split that word into individual characters
    var splitSelectedWord = selectedWord.split("");
    console.log(splitSelectedWord);
    //     setting _ for each character in selected word
    for (i = 0; i < selectedWord.length; i++){
        var underscores = splitSelectedWord[i] = "_";
        console.log(underscores);
    }
}
getRandomWord();

//     get user input 
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
}

//     check if user input matches currect word single character 
if (userGuess === splitSelectedWord) {
    //         if yes - place correct guess  in place of _ 
    underscores.join(userGuess);
} else {
    remainingGuesses--;
    //         if no - user losses a guess and incorrect guess is stored as incorrect guess 
    incorrectGuesses.join(userGuess);
}


//     if user guesses all correct letters - add one to wins 
//     if user runs out of guesses prompt game over 

