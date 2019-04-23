var fs = require("fs");
var Letter = require('./letter.js');

class Word {
    constructor(wordChoice) {
        this.letters = [];
        this.buildWord = function () {
            for (var i = 0; i < wordChoice.length; i++) {
                this.letters.push(new Letter(wordChoice[i]));
            }
            var resArr = [];
            for (var i = 0; i < this.letters.length; i++) {
                
                resArr.push(this.letters[i].change());
            }
            // console.log(this.letters);
            // console.log(this.letters[0].change())
            return resArr.join(' ');
        }
        
        this.guess = function (char) {
            const resArr = [];
            let underscores = 0;
            for (var i = 0; i < wordChoice.length; i++) {
                this.letters[i].testChar(char);
                resArr.push(this.letters[i].change());
            }
            return resArr.join(' ');
            // console.log(this.letters)
        }
    }
}

var myWord = new Word('hello');
// console.log(myWord.letters);
// console.log(myWord.buildWord());
// console.log(myWord.guess('e'));
// console.log(myWord.letters);

module.exports = Word;