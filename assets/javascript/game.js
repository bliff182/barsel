/* 

1. User presses any key to start 
2. Computer chooses a random word for the user to guess 
4. Random word is portrayed as underscores, with the number of underscores 
   corresponding to the number of letters in the random word 
3. User guesses a letter
    * If the letter is in the random word:
        - Letter will appear in all corresponding positions,
          replacing underscores
    * If the letter is not in the random word:
        - Letter will appear next to Letters Already Guessed
        - Number of Guesses Remaining will decrease by 1
4. If user guesses all letters in the random word:
    * Number of wins will increase by 1
    * Number of Guesses Remaining will reset to its original value
    * Computer chooses a new random word 
5. If Number of Guesses Remaining reaches 0:
    * Number of losses will increase by 1
    * Number of Guesses Remaining will reset to its original value
    * Computer chooses a new random word

     */



// array of all possible words to guess 
var allWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var startText = document.getElementById("start-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWordText = document.getElementById("currentword-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

// computer picks random word from array to start
var randomWord = allWords[Math.floor(Math.random() * allWords.length)];

// blank array to start with underscores corresponding to # of letters in randomWord
var answerArray = [];

// for loop adds underscore to answerArray for each letter in randomWord
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}

// displays current word as underscores; .join() method replaces comma separator with space
currentWordText.textContent = "Current Word: " + answerArray.join(" ");


// user hits any key to start
document.onkeyup = function(event) {

    // pressed key is set to lower case and stored as a variable
    var userGuess = event.key.toLowerCase();

    // variable to keep track of how many letters are left to be guessed. Will be reduced by 1 with each correct letter
    var remainingLetters = randomWord.length;

}