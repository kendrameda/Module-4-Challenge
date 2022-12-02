var startButton = document.querySelector('.start-button');
var currentScore = document.querySelector('.score');
var countdown = document.querySelector('.timer');

var question1 = ['How do you check your code in google chrome to see if it is executing properly?']; //Console.log
var question2 = ['How do you create a line break in a line of text?']; // /n
var question3 = ['Can you store more than primitive data in an object?']; //yes
var question4 = ['How do you access elements by id in JS?']; //.getElementById
var question5 = ['What command do you use to create a popup yes or no question?']; //confirm

var answer1 = ['console.log'];
var answer2 = ['/n'];
var answer3 = ['yes'];
var answer4 = ['.getElementById'];
var answer5 = ['confirm'];

var wrongAnswers1 = ['cosole.clear', 'console.info', 'console.group'];
var wrongAnswers2 = ['/w', '/e', '/b'];
var wrongAnswers3 = ['no', 'maybe'];
var wrongAnswers4 = ['.appendChild', '.createElement', '.setAttribute'];


var timerCount;
var coreectAnswer = document.querySelector('.C', '.E', '.J', '.P', '.S');
var wrongAnswer;
var points = 0;

function init() {
    coreectAnswer();
    wrongAnswer();
}

function startGame()  {
    coreectAnswer = false;
    timerCount = 35;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

function correctAnser() {
    wordBlank.textContent = "Correct!";

    coreectAnswer = points + 20;
    startButton.disabled = true;
    setWins()
}

function incorrect() {
    wordBlank.textContent = "Wrong answer :(";
    wrongAnswer = points - 7;
    startButton.disabled = false;
    setLosses()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (coreectAnswer && timerCount > 0) {
                clearInterval(timer);
                correctAnser();
            }
        }
        if (timerCount === 0) {
            clearInterval(timer);
            incorrect();
        }
    }, 1000)
}

function addPoints(){

}

startButton.addEventListener('click', startGame);

init();

