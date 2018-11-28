
// Letter Choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 0;
var guessesRemaining = 10;
var guessedLetters = [];
var lettersToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("This is what the computer picked: ", computerGuess);

// Let's the user have 10 total guesses




//Will be called and reset everything once the first game is done
var reset = function () {
    totalGuesses = 10;
    guessesRemaining = 10;
    guessedLetters = [];

}


// When the key is released it will be the User's guess

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    document.getElementById('guessedLetters').innerHTML = guessedLetters;

    console.log("Letter that user guessed: ", userGuess);

    var check = computerChoices.includes(userGuess);

    console.log(check);
    // will appear when error occurs

    if (check) {
        if (guessesRemaining == 0) {
            //When someone loses completely this will let them know and reset
            losses++;
            document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
            document.getElementById('Losses').innerHTML = losses;
            alert("You didn't see this coming, but, you failed the Psychic test, you could try again ");
            reset();

        } else {
            if (userGuess === computerGuess) {
                guessedLetters.push(userGuess);
                // reviseGuessesRemaining();
                // reviseGuessesMade();
                console.log(computerChoices);
                console.log(userGuess);
                wins++;
                alert("Well, it seems as if you maybe the chosen one. Can you do it again?");
                reset();
                document.getElementById('wins').innerHTML = wins;

            }
            else {
                guessedLetters.push(userGuess);
                console.log(guessedLetters);
                document.getElementById("guesses-left").innerHTML = guessesRemaining;
                guessesRemaining--;
            }
        }




    }
    // else {
    //     alert("Hope you're not celebrating, because you WRONG, Try again!");
    //     losses++;
    //     document.getElementById('Losses').innerHTML = losses;
    //     alert("You didn't see this coming, but, you failed the Psychic test, you could try again ");
    //     reset();
    //     // alert("something is wrong, we have an error!");
    // }
}



