 
 // Letter Choices
 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

 
 var wins = 0; 
 var losses = 0;
 var guesses = 0;
 var guessesRemaining = 10;
 var guessedLetters = [];
 var lettersToGuess = null;

 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 // Let's the user have 10 total guesses

 function revisedGuessesRemaining() {
     document.querySelector('#guesses-left').innerHTML= "Guesses left:" + guessesRemaining;
 }

 function GuessesSoFar() {
     
 }
