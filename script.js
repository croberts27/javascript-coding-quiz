//DEPENDENCIES
var startButton = document.querySelector("#start-button");
var questionsEl = document.getElementById("#questions");
var ans1El = document.getElementById("#ans1");
var ans2El = document.getElementById("#ans2");
var ans3El = document.getElementById("#ans3");
var ans4El = document.getElementById("#ans4");

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
        correctAnswer: 'd'
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: 'The <head> section',
            b: 'The <body> section',
            c: 'In the <JavaScript> section',
            d: 'In both the <head> and <body> sections',
        },
        correctAnswer: 'b'
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: 'function.myFunction()',
            b: 'function = myFunction()',
            c: 'function myFunction()',
            d: 'FUNK-ton()',
        },
        correctAnswer: 'c'
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: 'for (i=0;i<5;i++)',
            b: 'for (i+=5)',
            c: 'for (for i=0;i<5;i++)',
            d: 'for {i=0;i<5;i++}',
        },
        correctAnswer: 'a'
    }
];
//Function to display quiz questions

function displayQuestions() {
    var currentQuestion = quizQuestions[questionIndex];
    questionsEl.textContent = currentQuestion.question;
};

//Listens for click and checks answer
// ans1El.addEventListener('click', checkAnswer)
// ans2El.addEventListener('click', checkAnswer)
// ans3El.addEventListener('click', checkAnswer)
// ans4El.addEventListener('click', checkAnswer)

function checkAnswer(event){
    console.log(event.target.textContent)
    var currentQuestion = quizQuestions[questionIndex]
    if (currentQuestion.correctAnswer === event.target.textContent){
        console.log("Correct!");
        response.textContent = "Correct!";
    }
    questionIndex++
    displayQuestions();
}

//Function for timer
function startTimer () {
    timerInterval = setInterval(() => {
        timerCount = document.querySelector("#timer").innerHTML = "00:00:" + timerNum;
        timerNum--;

        if (timerNum === 0) {
            clearInterval(timerInterval);
        if (correctAnswer === false){
            timerNum.textContent = (timerNum - 10);
            timerNum.textContent = alert("Wrong!");
        }
        } 
    }, 1000);
}

//Function to start quiz
function startQuiz() {
    for (let i = 0; i < questions.length; i++) {
      displayQuestions();
    }
    // console.log("Quiz completed!");
    // console.log("Your score: " + score + "/" + questions.length);
  }

startButton.addEventListener("click", ()=> {
    startTimer();
    startQuiz();
});