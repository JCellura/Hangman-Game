
// declare global variables 
var s;
var count = 0;
var answerArray = [];
var wins = 0;
var wordArr = ['football','touchdown','fumble', 'turnover', 'cowboys','quarterback','reverse', 'offense', 'receiver', "coach"]
// using above array we choose a random word.
var word = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessArray = [];
var isGuessInArray = false;
var isQuit = false;

// function to run when the page loads
function startUp() {
    answerArray = [];
    // select random word out of the wordArr array
    // create an answerArray
    word = wordArr[Math.floor(Math.random() * wordArr.length)];
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        };
    
        // This puts the string into the answer div 
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
    };

// This function is run whenever the user presses a key.
document.onkeyup = function() {

    // creates a variable which represents the letter that has been clicked by the user
    var userguess = event.key;
   
    if (isQuit === false) {
    function guessOne() {
        var guess = userguess;
        var showThisMessage = "";
        // The function will only run if the user clicks a letter, if they click something else they get a message
        if (guess != "a" && guess !="b" && guess !="c" && guess !="d" && guess !="e" && guess !="f" && guess !="g" && guess !="h" && guess !="i" && guess !="j" && guess !="k" && guess !="l" && guess !="m" && guess !="n" && guess !="o" && guess !="p" && guess !="q" && guess !="r" && guess !="s" && guess !="d" && guess !="t" && guess !="u" && guess !="v" && guess !="w" && guess !="x" && guess !="y" && guess !="z") {
            showThisMessage ="Please Enter a Letter Only!";
        } 
        else {
        // Update the game with the guess if the letter is correct and is in the answer
            var i=0; 
            for (i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    answerArray[i] = guess;
                    showThisMessage = "YES! "+guess+" is in the answer";
                };             
            };
        // console.log(answerArray);
        // We push the letter that has been clicked into a guess array
        // the letter will only be pushed if it has not been clicked before
            for (i=0;i < guess.length; i++) {
                if (count<8 && guess !== guessArray[i] && guessArray.indexOf(guess) === -1) {
                        guessArray.push(guess);
                };                       
            };
                
        // Update the game for remaining unknowns
            var remaining_letters = answerArray.length;
        // recount the remaining letters
            for (i = 0; i < answerArray.length; i++) {
                if (answerArray[i] !== '_') {
                    remaining_letters -= 1;
                };
            };
        
        // if no remaining letters, the word has been guessed
        // need to reset the count, add 1 to the win amount and correctly alert the uer
            if (remaining_letters == 0) {
                showThisMessage = "YES! You Correctly Guessed the Word " + word + " Try and Guess Another!";
                wins++
                document.getElementById("wins").innerHTML = "Number of Wins: " + wins;
                startUp();
                guessArray = [];
                count=0;
            }
        
        // (otherwise) if we have no message (if showThisMessage still equals "" it has not been changed) --> wrong guess 
            if (showThisMessage === "") {
                showThisMessage = "Sorry, no "+guess;
                count++;
            }
    
        // Update the puzzle
            document.getElementById("answer").innerHTML = answerArray.join(" ");

            // console.log(count);
         
        // if count is less than or equal till 8, user still has counts remaining
            if (count <= 8) {
            document.getElementById("counter").innerHTML = "Number of Guesses Remaining: " + (8 - count);
            }
        // if count is greater than or equal to 8 then the user is out of clicks and the 
            if (count >= 8) {
            document.getElementById("stat").innerHTML = "You Are Out of Clicks! Hit Start-Over for New Game!"
            // startUp();
            showThisMessage = "Game Over!";
            }
        // This changes the greeting from "click any key to begin" to "good luck" as soon as there has been a click
            if (count >0) {
                document.getElementById("press-any-key").innerHTML = "Good Luck!"
            }
            
        }

        document.getElementById("message").innerHTML = showThisMessage;
      
    };
    };

    // We need to call the guess function
    guessOne();
    // This places the guessArray into a div so the user can see the letters they have guessed
    document.getElementById("guess").innerHTML = "Letters Already Guessed:" + guessArray.join(", ");

};

// Creates a refresh function for when the "start-over" button is clicked, everything can be reset
function refresh() {
    isQuit = false;
    startUp();
    count=0;
    wins=0;
    guessArray = [];
    document.getElementById("counter").innerHTML = "Number of Guesses Remaining: 8";
    document.getElementById("wins").innerHTML = "Number of Wins: 0";
    document.getElementById("stat").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("guess").innerHTML = "Letters Already Guessed:";
    document.getElementById("empty").innerHTML = "";
}

// creates a quit function to run when the user clicks the "give-up" button
// this will reveal the word to the user 
function quit() {
    // set isQuit to true so that the guessOne function can no longer run after the user quits!
    isQuit = true;
   // tell the user what the word was
    document.getElementById("empty").innerHTML = "The Word Was " + word + "! Click The Start-Over Button To Begin a New Game!";
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = word[j];
    }
    // We have set answerarray equal to the word, now we must display the answer array in the div
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}

