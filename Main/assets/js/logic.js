var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');


var buttonOptions = document.getElementById('choices')

var sfxRight = new Audio('assets/sfx/correct.wav');
var sfxWrong = new Audio('assets/sfx/incorrect.wav');


startBtn.addEventListener("click", function startQuiz() {
    questionsEl.className = "start";

    addButtons();
    console.log(this.choicesEl.addEventListener("click"));
   
   var selection = choicesEl.addEventListener("click", function checkAnswer(){
        console.log(selection);
    } )
}

);


var questionNumb = 0; //current question user is on

function addButtons() {

    for (x = 0; x < questions[questionNumb].choices.length; x++) {
        var userChoices = questions[questionNumb].choices[x];
        //loads buttons with choices based on current question user is on

        var newBtn = document.createElement('button');
        newBtn.id = userChoices;
        //add id to element
        newBtn.innerText = userChoices;

        document.querySelector('#choices').appendChild(newBtn);
        //append to parent class
    }
}


