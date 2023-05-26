//DEPENDENCIES
var startButton = document.querySelector("#start-button");
var questionsEl = document.getElementById("questions");
var quizEl = document.getElementById("quiz");
var ans1El = document.getElementById("ans1");
var ans2El = document.getElementById("ans2");
var ans3El = document.getElementById("ans3");
var ans4El = document.getElementById("ans4");

//DATA
var timerNum = 60;
var questionIndex = 0;
//Define questions

var quizQuestions = [
    {
        question: "Inside which HTML element does JavaScript live?",
        answers: {
            a: '<JavaScript>',
            b: '<javascript>',
            c: '<js>',
            d: '<script>',
        },
        correctAnswer: '<script>'
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: 'The <head> section',
            b: 'The <body> section',
            c: 'In the <JavaScript> section',
            d: 'In both the <head> and <body> sections',
        },
        correctAnswer: 'The <body> section'
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: 'function.myFunction()',
            b: 'function = myFunction()',
            c: 'function myFunction()',
            d: 'FUNK-ton()',
        },
        correctAnswer: 'function myFunction()'
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: 'for (i=0;i<5;i++)',
            b: 'for (i+=5)',
            c: 'for (for i=0;i<5;i++)',
            d: 'for {i=0;i<5;i++}',
        },
        correctAnswer: 'for (i=0;i<5;i++)'
    }
];
//Function to display quiz questions

function displayQuestions() {
    quizEl.classList.remove("hidden");
    var currentQuestion = quizQuestions[questionIndex];
    questionsEl.textContent = currentQuestion.question;
    ans1El.textContent = currentQuestion.answers.d;
    ans2El.textContent = currentQuestion.answers.b;
    ans3El.textContent = currentQuestion.answers.c;
    ans4El.textContent = currentQuestion.answers.a;
};

function checkAnswer(event){
    console.log(event.target.textContent)
    var currentQuestion = quizQuestions[questionIndex]
    if (currentQuestion.correctAnswer === event.target.textContent){
        console.log("Correct!");
        alert("Correct!") ;
    } else {
        timerNum -= 10;
        alert("Wrong!");
    }
    if (questionIndex < quizQuestions.length){
        questionIndex++;
        displayQuestions();
    } else {
        gameOver();
    }
};

//Function for timer
function startTimer () {
    timerInterval = setInterval(() => {
        timerCount = document.querySelector("#timer").innerHTML = "00:00:" + timerNum;
        timerNum--;
        if (timerNum === 0) {
            clearInterval(timerInterval);
        } 
    }, 1000);   
}

function gameOver () {
    quizEl.classList.add("hidden");
    questionIndex >= quizQuestions.length;
}

//Function to start quiz
function startQuiz() {
      displayQuestions();
  }
// console.log("Quiz completed!");
// console.log("Your score: " + score + "/" + questions.length);
//Listens for click and checks answer

ans1El.addEventListener('click', function(event) {
    checkAnswer(event)})
ans2El.addEventListener('click', function(event) {
    checkAnswer(event)})
ans3El.addEventListener('click', function(event) {
    checkAnswer(event)})
ans4El.addEventListener('click', function(event) {
    checkAnswer(event)});

startButton.addEventListener("click", ()=> {
    startTimer();
    startQuiz();
});