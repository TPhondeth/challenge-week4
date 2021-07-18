var quizContainerEl = document.querySelector(".quizContainer");
var highScoreEl = document.querySelector(".highScore");
var timerEl = document.querySelector(".timer");
var startBtn = document.querySelector(".startBtn");
var answerEl = document.querySelector(".answer");

// Event Listeners
startBtn.addEventListener('click', countdown);
startBtn.addEventListener('click', questions);

// Questions Object with Array of Questions
var quizQuestions = [
    {
        question: "Commonly used data types DO not include:",
        answers: { 1: "alerts", 2: "booleans", 3: "numbers", 4: "strings" },
        correctAnswer: "1",
    },
    {
        question: "The condition in an if / else statement in enclosed with _____.",
        answers: { 1: "quotes", 2: "curly brackets", 3: "parenthesis", 4: "square brackets"},
        correctAnswer: "3",
    },
    {
        question: "Arrays is Javascript can be used to store _____.",
        answers: { 1: "numbers and strings", 2: "other arrays", 3: "booleans", 4: "all of the above"},
        correctAnswer: "4"
    },
    {
        question: "String variables must be enclosed within _____ when being assigned to variables.",
        answers: { 1: "commas", 2: "quotes", 3: "curly brackets", 4: "parenthesis"},
        correctAnswer: "2"
    }
];

var score = 75;
var timeLeft = 75;

// Countdown Function
function countdown() {
    var timeInterval = setInterval( function() {
        timeLeft--;
        timerEl.textContent = `Time: ${timeLeft}`;

    if(timeLeft <= 0) {
        clearInterval(timeInterval);
    }
    },1000)
}

// Question Variables
var currentQuestions = 0;
var question = quizQuestions[currentQuestions];

// Function to Show Questions
function questions() {
        var output = [];
        var answers = [];

        for (var answer = 1; answer <= quizQuestions.length; answer++) {
            answers.push(
                `<div>
                <button name="question${currentQuestions}" onclick='answerCheck(${answer})'>${answer} ${question.answers[answer]}</button>           
                </div>`
            );
        }

        output.push(`<div id="questions">${question.question}</div>
                    <div id="answers">${answers.join("")}</div>`);

        quizContainerEl.innerHTML = output.join("");
}

// Function to Check Answers
function answerCheck(answer) {
    if(answer === parseInt(quizQuestions[currentQuestions].correctAnswer)) {
        display("Correct!");
    } else {
        display("Wrong!");
        if(score <= 9) {
            timeLeft = 0;
            score = timeLeft;
        } 
        timerEl.innerHTML = `Time: ${timeLeft}`;
    }
}

// Function to Display Answer
function display(answer) {
    answerEl.innerHTML = `<div><hr><p>${answer}</p></div>`;
    setInterval(() => {
    answerEl.innerHTML = "";
    }, 1000);
}

