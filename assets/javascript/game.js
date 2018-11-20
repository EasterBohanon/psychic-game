
// Letter Choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 0;
var guessesRemaining = 10;
var guessedLetters = [];
//  var lettersToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("This is what the computer picked: ", computerGuess);

// Let's the user have 10 total guesses

function reviseGuessesRemaining() {
    document.querySelector('#guesses-left').innerHTML = "Guesses left:" + guessesRemaining;
};
// Will update the amount of letters left to guess
function reviseLetterToGuess() {
    this.lettersToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
// Will display letters that have been entered by the user
function reviseGuessesMade() {
    document.querySelector('#guesses-so-far').innerHTML = "Your Guesses so far:" + guessedLetters.join(', ');
};




//Will be called and reset everything once the first game is done
var reset = function () {
    totalGuesses = 10;
    guessesRemaining = 10;
    guessedLetters = [];

    reviseLetterToGuess();
    reviseGuessesRemaining();
    reviseGuessesMade();
}

reviseLetterToGuess();
reviseGuessesRemaining();

// When the key is released it will be the User's guess

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    console.log("Letter that user guessed: ", userGuess);

    var check = computerChoices.includes(userGuess);

    console.log(check);
    // will appear when error occurs

    if (guessesRemaining == 0) {
        //When someone loses completely this will let them know and reset
        losses++;
        document.querySelector('#Losses').innerHTML = "Losses:" + losses;
        alert("You didn't see this coming, but, you failed the Psychic test, you could try again ");
        reset();

    }
else if (check) {
        if (userGuess === computerGuess) {
            guessedLetters.push(userGuess);
            reviseGuessesRemaining();
            reviseGuessesMade();
            console.log(computerChoices);
            console.log(userGuess);
            wins++;
            alert("Well, it seems as if you maybe the chosen one. Can you do it again?");
            reset();
         document.querySelector('#wins').innerHTML = "Wins:" + wins;
            
        }
    }
    else {
        alert("Hope you're not celebrating, because you WRONG, Try again!");
        // alert("something is wrong, we have an error!");
    }
};

