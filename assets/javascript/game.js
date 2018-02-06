
var s;
var count = 0;
var answerArray = [];
var wins = 0;
var wordArr = ['football','touchdown','fumble', 'turnover', 'cowboys','quarterback']
// using above array we choose a random word.
var word = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessArray = [];
        
function startUp() {
    answerArray = [];
    word = wordArr[Math.floor(Math.random() * wordArr.length)];
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        }
    
        // putting in a string
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
    }

    // This function is run whenever the user presses a key.
document.onkeyup = function() {

    
    
    var userguess = event.key;
    

    
    function guessOne() {
        var guess = userguess;
        guessarray = [];
        console.log(guess);
        var showThisMessage = "";
    
        if (guess != "a" && guess !="b" && guess !="c" && guess !="d" && guess !="e" && guess !="f" && guess !="g" && guess !="h" && guess !="i" && guess !="j" && guess !="k" && guess !="l" && guess !="m" && guess !="n" && guess !="o" && guess !="p" && guess !="q" && guess !="r" && guess !="s" && guess !="d" && guess !="t" && guess !="u" && guess !="v" && guess !="w" && guess !="x" && guess !="y" && guess !="z") {
            showThisMessage ="Please Enter a Letter Only!";
        } else {
                // Update the game with the guess
                var i=0; // an indexer into the array 
                for (i = 0; i < word.length; i++) {
                    if (word[i] === guess) {
                        answerArray[i] = guess;
                        showThisMessage = "YES! "+guess+" is in the answer";
                    }
                }
        console.log(answerArray);
                
                for (i=0;i < guess.length; i++) {
                if (count<15 && guessArray[i] !== guess) {
                    guessArray.push(guess);
                    count++;
                }
            }

        
        console.log(guessArray);
        
                // Update the game for remaining unknowns
                var remaining_letters = answerArray.length;
                // recount the remaining letters
                for (i = 0; i < answerArray.length; i++) {
                    if (answerArray[i] !== '_') {
                        remaining_letters -= 1;
                    }
                }
        
                // if no remaining letters, hurray, you won
                if (remaining_letters == 0) {
                    showThisMessage = "YES! You Correctly Guessed the Word " + word + " Try and Guess Another!";
                    wins++
                    document.getElementById("wins").innerHTML = "Number of Wins: " + wins;
                    startUp();
                    guessArray = [];
                    count=0;
                }
        
                // (otherwise) if we have no message, wrong guess 
                if (showThisMessage === "") {
                    showThisMessage = "Sorry, no "+guess;
                }
        
                // Update the puzzle
                document.getElementById("answer").innerHTML = answerArray.join(" ");

        
            // count++
            console.log(count);
            
            if (count <= 15) {
            document.getElementById("counter").innerHTML = "Number of Guesses Remaining: " + (15 - count);
            }

            if (count >= 15) {
            document.getElementById("stat").innerHTML = "You Are Out of Clicks! Hit Start-Over for New Game!"
            startUp();
            showThisMessage = "Game Over!";
            }

            if (count >0) {
                document.getElementById("press-any-key").innerHTML = "Good Luck!"
            }
            
        }

        
        document.getElementById("message").innerHTML = showThisMessage;
    
        
};

guessOne();

document.getElementById("guess").innerHTML = "Letters Already Guessed:" + guessArray.join(", ");

};

function refresh() {
    startUp();
    count=0;
    wins=0;
    guessArray = [];
    document.getElementById("counter").innerHTML = "Number of Guesses Remaining: 15";
    document.getElementById("wins").innerHTML = "Number of Wins: 0";
    document.getElementById("stat").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("guess").innerHTML = "Letters Already Guessed:";
}

function quit() {
    document.getElementById("message").innerHTML = "The word was "+word;
    for (var j = 0; j < word.length; j++) {
        answerArray[j] = word[j];
    }
    // Solve the puzzle
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}

