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