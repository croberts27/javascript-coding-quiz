//KEYs
//GET TIMER TO WORK
//TIMER NEEDS TO DECREASE FOR WRONG ANSWERS
//SAVE THINGS IN LOCAL STORAGE
//RETRIEVING AND PRESENTING DATA FROM LOCAL STORAGE

//DEPENDENCIES / DOM
var startButton = document.querySelector("#start-button");
var timerNum = 60;

//DATA
function startQuiz () {
    timerInterval = setInterval(() => {
        timerCount = document.querySelector("#timer").innerHTML = "00:00:" + timerNum;
        timerNum--;

        if (timerNum === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
    document.getElementById("questions").style.display = "flex";
    document.getElementById("questions").style.justifyContent = "center";
}

startButton.addEventListener("click", ()=> {
    startQuiz();
    document.querySelector("#introduction").style.display="none";
    document.querySelector("#instructions").style.display="none";
    document.querySelector("#start-button").style.display="none";
})