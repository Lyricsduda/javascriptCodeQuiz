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
