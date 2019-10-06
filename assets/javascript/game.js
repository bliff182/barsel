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
    "anarky",
    "bane",
    "catwoman",
    "clayface",
    "deadshot",
    "deathstroke",
    "firefly",
    "hush",
    "joker",
    "penguin",
    "riddler",
    "scarecrow",
    "grundy",
    "twoface",
    "zsasz"
];

// array to store all possible letter choices 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;

var startText = document.getElementById("start-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWordText = document.getElementById("currentword-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");


//user clicks button to start
function startGame() {


    // computer picks random word from array to start
    var currentWord = allWords[Math.floor(Math.random() * allWords.length)];

    // variable to keep track of how many letters are left to be guessed. Will be reduced by 1 with each correct letter
    var remainingLetters = currentWord.length;

    var guessesLeft = 8;
    var lettersGuessed = [];

    // blank array to start with underscores corresponding to # of letters in randomWord
    var answerArray = [];

    // for loop adds underscore to answerArray for each letter in randomWord
    for (var i = 0; i < currentWord.length; i++) {
        answerArray[i] = "_";
    }

    // displays current word as underscores; .join() method replaces comma separator with space
    currentWordText.textContent = "Current Word: " + answerArray.join(" ");

    guessesLeftText.textContent = "Number of Guesses Remaining: " + guessesLeft;
    lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed.join(", ");
    console.log(currentWord);

    // user hits any key to start
    document.onkeyup = function (event) {

        // pressed key is set to lower case and stored as a variable
        var userGuess = event.key.toLowerCase();

        // checking if userGuess is in letters array
        var letterIndex = letters.indexOf(userGuess);

        // variable to check if guessed letter is in current random word
        var isInWord = currentWord.includes(userGuess);
        


        // USER WINS        
        if (remainingLetters === 0) {
            wins++;
            alert("you win");
            // these values reset 
            guessesLeft = 15;
            lettersGuessed = [];
            answerArray = [];
            currentWord = allWords[Math.floor(Math.random() * allWords.length)];
            // html gets updated 
            winsText.textContent = "Wins: " + wins;
            remainingLetters = currentWord.length;
            for (var i = 0; i < currentWord.length; i++) {
                answerArray[i] = "_";
            }
            // currentWordText.textContent = "Current Word: " + answerArray.join(" ");
            lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed.join(", ");
            guessesLeftText.textContent = "Number of Guesses Remaining: " + guessesLeft;

        } else if (letterIndex > -1) {

            // runs this code if userGuess is in the current word
            if (isInWord) {
                // loops through word to look for where guess is in the word
                for (var j = 0; j < currentWord.length; j++) {

                    if (currentWord[j] === userGuess) {

                        // replaces underscore in answerArray with guessed letter
                        answerArray[j] = userGuess;

                        remainingLetters--;

                        // updates html for answerArray
                        currentWordText.textContent = "Current Word: " + answerArray.join(" ");
                    }
                }
            } else {
                guessesLeft--;
                // userGuess is added to lettersGuessed array 
                lettersGuessed.push(userGuess);
                // updates html for these elements 
                guessesLeftText.textContent = "Number of Guesses Remaining: " + guessesLeft;
                lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed.join(", ");
            }

                if (guessesLeft === 0) {
                    alert("you lose");
                    losses++;
                    //these values reset
                    guessesLeft = 15;
                    lettersGuessed = [];
                    // answerArray = [];
                    currentWord = allWords[Math.floor(Math.random() * allWords.length)];
                    // losses html gets updated
                    lossesText.textContent = "Losses: " + losses;
                    remainingLetters = currentWord.length;
                    for (var i = 0; i < currentWord.length; i++) {
                        answerArray[i] = "_";
                    }
                    // currentWordText.textContent = "Current Word: " + answerArray.join(" ");
                    lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed.join(", ");
                    guessesLeftText.textContent = "Number of Guesses Remaining: " + guessesLeft;
                    return;
                }
            

            /* for (var k = 0; k < currentWord.word.length; k++){
                if (answerArray[k] !== userGuess) {

                }
            } */

            // code to run if user guesses all letters in the word 



        }

    }

};