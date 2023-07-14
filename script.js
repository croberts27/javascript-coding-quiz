// Quiz questions and answers
var quizQandAs = [
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "scripting",
      b: "script",
      c: "javascript",
      d: "js",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of a <p> html element with the id 'demo'?",
    answers: {
      a: '#demo.innerHTML = "Hello World!',
      b: 'document.getElementByName("p").innerHTML = "Hello World!";',
      c: 'document.getElementById("demo").innerHTML = "Hello World!;',
      d: 'document.getElement("p").innerHTML = "Hello World!;',
    },
    correctAnswer: "c",
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    answers: {
      a: 'script src="script.js"',
      b: 'script href="script.js"',
      c: 'script id="script.js"',
      d: 'script name="script.js"',
    },
    correctAnswer: "a",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: {
      a: 'msgBox("Hello World");',
      b: 'alertBox("Hello World")',
      c: 'msg("Hello World")',
      d: 'alert("Hello World")',
    },
    correctAnswer: "d",
  },
];

// Global variables
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var highScores = [];

var startButton = document.getElementById("start-button");
var quizSection = document.getElementById("quiz");
var questionsElement = document.getElementById("questions");
var answerButtons = document.querySelectorAll("#quiz button[id^='ans']");
var scoreSection = document.getElementById("scoreSection");
var scoreElement = document.getElementById("score");
var submitButton = document.getElementById("submit");
var scoreboard = document.getElementById("scoreboard");
var highScoresButton = document.getElementById("high-scores-button");
var highScoresSection = document.getElementById("high-scores-section");

// Function to start the quiz
function startQuiz() {
  startButton.classList.add("hidden");
  quizSection.classList.remove("hidden");
  timerInterval = setInterval(updateTimer, 1000);
  displayQuestion();
  showButtons(); // Show the answer buttons
}

// Function to show the answer buttons
function showButtons() {
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove("hidden");
  }
}
// Function to display a question
function displayQuestion() {
  var currentQuestion = quizQandAs[currentQuestionIndex];
  questionsElement.textContent = currentQuestion.question;

  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent =
      currentQuestion.answers[Object.keys(currentQuestion.answers)[i]];
    answerButtons[i].addEventListener("click", checkAnswer);
  }
}

// Function to check the selected answer
function checkAnswer(event) {
  var selectedAnswerIndex = parseInt(event.target.id.slice(-1));
  var currentQuestion = quizQandAs[currentQuestionIndex];

  if (
    Object.keys(currentQuestion.answers)[selectedAnswerIndex] ===
    currentQuestion.correctAnswer
  ) {
    // Correct answer
    alert("Correct!");
  } else {
    // Incorrect answer
    alert("Wrong!");
    timeLeft -= 10;
    if (timeLeft <= 0) {
      timeLeft = 0;
      endQuiz();
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex === quizQandAs.length || timeLeft <= 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  quizSection.classList.add("hidden");
  scoreSection.classList.remove("hidden");
  scoreElement.textContent = timeLeft;
  highScores.push(timeLeft);
  saveHighScores();
  submitButton.classList.remove("hidden");
  submitButton.addEventListener("click", saveScore);
}

// Function to save the score
function saveScore() {
  var initials = prompt("Please enter your initials:");
  var scoreEntry = {
    initials: initials,
    score: timeLeft,
  };
  highScores.push(scoreEntry);
  saveHighScores();
  displayHighScores();
}

// Function to save high scores to local storage
function saveHighScores() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// Function to retrieve high scores from local storage
function getHighScores() {
  var storedHighScores = localStorage.getItem("highScores");
  if (storedHighScores) {
    highScores = JSON.parse(storedHighScores);
  }
}

// Function to display the high scores
function displayHighScores() {
  highScoresSection.innerHTML = "";
  if (highScores.length === 0) {
    var noScoresMessage = document.createElement("p");
    noScoresMessage.textContent = "No high scores recorded yet.";
    highScoresSection.appendChild(noScoresMessage);
  } else {
    var scoresList = document.createElement("ol");
    for (var i = 0; i < highScores.length; i++) {
      var scoreItem = document.createElement("li");
      scoreItem.textContent =
        highScores[i].initials + ": " + highScores[i].score;
      scoresList.appendChild(scoreItem);
    }
    highScoresSection.appendChild(scoresList);
  }
  highScoresSection.classList.toggle("hidden");
}

// Function to update the timer
function updateTimer() {
  var timerElement = document.getElementById("timer");
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  var timeString = padNumber(minutes) + ":" + padNumber(seconds);
  timerElement.textContent = timeString;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    endQuiz();
  }
}
// Event listener for the start button
startButton.addEventListener("click", startQuiz);

// Event listener for the high scores button
highScoresButton.addEventListener("click", displayHighScores);

// Initialization
getHighScores();
