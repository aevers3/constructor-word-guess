var fs = require("fs");

class Letter {
    constructor(letterValue, isGuessed) {
        this.letterValue = letterValue;
        this.isGuessed = false;
        this.change = function () {
            // console.log(this.isGuessed);
            if (this.isGuessed) {
                return this.letterValue;
            } else {
                return '_';
            }
        }
        this.testChar = function (a) {
            if (a === this.letterValue) {
                // console.log('match');
                this.isGuessed = true;
            } else {
                // console.log('no match');
            }
        }
    }
}

// var myLetter = new Letter('G');
// console.log(myLetter);
// console.log(myLetter.testChar('G'));
// console.log(myLetter.isGuessed);

module.exports = Letter;