// Quiz questions array's

var questions = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings( )", "booleans( )", "alerts( )", "numbers( )"],
    answer: "alerts( )"
},
{
    question: "The condition in an if / else statement is enclosed with ___.",
    choices: ["quotes( )", "curly brackets( )", "parentheses( )", "square brackets( )"],
    answer: "curly brackets( )"
},
{
    question: "Array's in JavaScript can be used to store ___.",
    choices: ["numbers and strings( )", "other arrays( )", "booleans( )", "all of the above"],
    answer: "all of the above( )"
},
{
    question: "String values must be enclosed within ___ when being assigned to variables.",
    choices: ["commas( )", "curly brackets( )", "quotes( )", "parentheses( )"],
    answer: "quotes( )"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["javascript( )", "terminal/bash( )", "for loops( )", "console.log( )"],
    answer: "console.log( )"
}
]

// declared variables for score, question, and timer 

var score = 0;
var currentQuestion = -1;
var timeCountdown = 0;
var timer;

// function to activate the counter when the start button is clicked and to end the time when its under 0
function startButton() {

    timeCountdown = 75;
    document.getElementById("timeCountdown").innerHTML = timeCountdown;

    timer = setInterval(function () {
        timeCountdown--;
        document.getElementById("timeCountdown").innerHTML = timeCountdown;

        if (timeCountdown <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);

    next();
}

// Function to stop the game and bring you to the end screen
function gameOver() {
    clearInterval(timer);

    var quizFinal = `
    <h1>All done!</h1>
    <p>Your final score is ` + score + `</p>
    Enter Initials: <input type="text" id="name" placeholder="First name"> 
    <button onclick="setfinalScore()">Submit</button>`;

    document.getElementById("quizMain").innerHTML = quizFinal;
}






// Saves the games scores onto local storage
function setfinalScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getHighScore();
}

function getHighScore() {
    var quizFinal = `
    <h1>` + localStorage.getItem("highscoreName") + `'s Highscore: </h1>
    <p>` + localStorage.getItem("highscore") + `</p><br> 
    
    <button onclick="restartGame()">Go back</button><button onclick="clearHighScore()">Clear highscore</button>
    
    `;

    document.getElementById("quizMain").innerHTML = quizFinal;
}

// Clears highscores when the clear highscore button is selected
function clearHighScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    restartGame();
}


// Function to reset the game to the main screen
function restartGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeCountdown = 0;
    timer = null;

    document.getElementById("timeCountdown").innerHTML = timeCountdown;

    var quizFinal = `
    <h1>Coding Quiz Challenge</h1>
    <p>Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect
    anwser will penalize your score/time <br> by ten seconds! </p>
    <button onclick="startButton()">Start</button>`;

    document.getElementById("quizMain").innerHTML = quizFinal;
}

