var wins = 0;
var losses = 0;

// variables for html we want to eventually change
var startText = document.getElementById("start-text");
var winLoseText = document.getElementById("win-lose-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWordText = document.getElementById("currentword-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");


// CLICK BUTTON TO START
function startGame() {

    // array of all possible words to guess 
    var allWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

    // array to store all possible letter choices 
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var guessesLeft = 8;
    var lettersGuessed = [];

    // blank array to start with underscores corresponding to # of letters in randomWord
    var answerArray = [];

    // computer picks random word from allWords array to start
    var currentWord = allWords[Math.floor(Math.random() * allWords.length)];

    // variable to keep track of how many letters are left to be guessed. Will be reduced by 1 with each correct letter
    var remainingLetters = currentWord.length;


    // for loop adds underscore to answerArray for each letter in randomWord
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
            answerArray[i] = " ";
        }
        else {
            answerArray[i] = "_";
        }
    }

    winLoseText.textContent = "";
    // displays current word as underscores; .join() method replaces comma separator with space
    currentWordText.textContent = answerArray.join(" ");

    guessesLeftText.textContent = "Guesses Remaining: " + guessesLeft;
    lettersGuessedText.textContent = "Already Guessed: " + lettersGuessed.join(", ");

    console.log(currentWord);

    // USER STARTS GUESSING
    document.onkeyup = function (event) {

        // pressed key is set to lower case and stored as a variable
        var userGuess = event.key.toLowerCase();

        // check if userGuess is in letters array
        var letterIndex = letters.indexOf(userGuess);

        // variable to check if guessed letter is in current random word
        var isInWord = currentWord.includes(userGuess);

        // take userGuess out of letter array to prevent repeat guesses
        letters.splice(letterIndex, 1);


        // code to run if user input is a letter
        if (letterIndex > -1) {
            // if userGuess is in currentWord
            if (isInWord) {
                for (var j = 0; j < currentWord.length; j++) {
                    if (currentWord[j] == userGuess) {
                        answerArray[j] = userGuess;
                        remainingLetters--;
                        currentWordText.textContent = answerArray.join(" ");
                    }
                }
            }

            else {
                guessesLeft--;
                lettersGuessed.push(userGuess);
                guessesLeftText.textContent = "Guesses Remaining: " + guessesLeft;
                lettersGuessedText.textContent = "Already Guessed: " + lettersGuessed.join(", ");
            }


        }

// USER WINS
        if (remainingLetters == 0) {
            wins++;
            winLoseText.textContent = "You Win! Click the button to play again!";
            winsText.textContent = "Wins: " + wins;
        }

// USER LOSES
        else if (guessesLeft == 0) {
            losses++;
            winLoseText.textContent = "You Lose :( Click the button to play again.";
            lossesText.textContent = "Losses: " + losses;

        }
    };
};