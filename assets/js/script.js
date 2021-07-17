var highScoreEl = document.querySelector(".highScore");
var timerEl = document.querySelector(".timer");
var startBtn = document.querySelector(".startBtn");


// Questions Object with Array of Questions
questions = [
    {
        questionText: "Commonly used data types DO not include:",
        questionAnswer: { 1: "alerts", 2: "booleans", 3: "numbers", 4: "strings" },
        answer: "1",
    },
    {
        questionText: "The condition in an if / else statement in enclosed with _____.",
        questionAnswer: { 1: "quotes", 2: "curly brackets", 3: "parenthesis", 4: "square brackets"},
        answer: "3",
    },
    {
        questionText: "Arrays is Javascript can be used to store _____.",
        questionAnswer: { 1: "numbers and strings", 2: "other arrays", 3: "booleans", 4: "all of the above"},
        answer: "4",
    },
    {
        questionText: "String variables must be enclosed within _____ when being assigned to variables.",
        questionAnswer: { 1: "commas", 2: "quotes", 3: "curly brackets", 4: "parenthesis"},
        answer: "2",
    }
];

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval( function() {
        timeLeft >= 1;
        timerEl.textContent = `Time: ${timeLeft}`;

    if(timeLeft <= 0) {
        clearInterval(timeInterval);
    }
    },1000)
}

// Event Listeners
startBtn.addEventListener('click', countdown);