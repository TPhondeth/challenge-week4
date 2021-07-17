var quizContainerEl = document.querySelector(".quizContainer");
var highScoreEl = document.querySelector(".highScore");
var timerEl = document.querySelector(".timer");
var startBtn = document.querySelector(".startBtn");

// Event Listeners
startBtn.addEventListener('click', countdown);
startBtn.addEventListener('click', showQuestions);

// Questions Object with Array of Questions
var codeQuiz = [
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


// Countdown Function
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval( function() {
        timeLeft--;
        timerEl.textContent = `Time: ${timeLeft}`;

    if(timeLeft <= 0) {
        clearInterval(timeInterval);
    }
    },1000)
}

// Function to Show Questions
function showQuestions() {
        var questionsCounter = 0;
        var question = codeQuiz[questionsCounter];
        var output = [];
        var answers = [];
    
        for (answer in question.answers) {
            answers.push(
                        `<div>
                        <button name="question${questionsCounter}" onclick='checkAnswer(${answer})'>${answer} ${question.answers[answer]}</button>           
                        </div>`
            );
        }

        output.push(
                    `<div id="questions"> ${question.question} </div>
                    <div id="answers"> ${answers.join("")} </div>`
    );
            quizContainerEl.innerHTML = output.join("");
}

