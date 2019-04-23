var Word = require("./word");
var inquirer = require('inquirer');
var instruments = ['GUITAR', 'DRUMS', 'TRIANGLE', 'TRUMPET', 'VIOLIN', 'SAXOPHONE', 'CELLO', 'CLARINET', 'PIANO', 'TUBA'];

// Randomly select a word from the isntruments array
var wordChoice = instruments[Math.floor(Math.random() * instruments.length)];
// console.log(wordChoice);

// Constructor from word.js
var hiddenWord = new Word(wordChoice);


// Welcome message.... Game starts here.
inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Welcome to Guess That Instrument, where you... \n***Guess That Instrument.*** \nReady to begin?',
            name: 'confirmStart',
            default: true
        }
    ]).then(function (inquirerResponse) {
        if (inquirerResponse.confirmStart) {
            // Build word using randomly selected word from array above
            console.log(hiddenWord.buildWord(wordChoice));
            // console.log(hiddenWord)
            var guessesRemaining = 5

            takeGuess(guessesRemaining);
        }
    });

function takeGuess(guessesRemaining) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter!',
                name: 'userGuess'
            }
        ]).then(function (inquirerResponse) {
            // console.log(guessesRemaining);
            var userGuess = inquirerResponse.userGuess.toUpperCase();
            // console.log(userGuess);
            // console.log(wordChoice.indexOf(userGuess));

            // Actually run the test on the userGuess.
            // This function depends on both word.js and letter.js to work properly.
            console.log(hiddenWord.guess(userGuess));

            // Check score
            if (wordChoice.indexOf(userGuess) === -1) {
                guessesRemaining--;
                console.log(`You have ${guessesRemaining} guesses remaining.`);
            } else {
                console.log(`That's right!`);
            }

            // End game check
            console.log('');
            console.log('----------------------------------------');
            if (guessesRemaining <= 0) {
                console.log('game over');
            } else if (hiddenWord.guess(userGuess).includes('_')) {
                takeGuess(guessesRemaining);
            } else {
                console.log('You win!');
            }
        })
}