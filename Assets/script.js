const quiz = [

    {
        question: 'Commonly used data types DO NOT include:',
        options: [
            'strings',
            'booleans',
            'alerts',
            'numbers'
        ],
        answer: 'alerts'

    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        options: [
            'quotes',
            'curly brackets',
            'parentheses',
            'square brackets'
        ],
        answer: 'parentheses'

    },
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        options: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above'
        ],
        answer: 'all of the above'

    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        options: [
            'commas',
            'curly brackets',
            'quotes',
            'parentheses'
        ],
        answer: 'quotes'

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        options: [
            'JavaScript',
            'terminal / bash',
            'for loops',
            'console.log'
        ],
        answer: 'console.log'

    },
];

var startQuiz = document.querySelector('#startQuiz');
var timeLeft = 75;
var refreshIntervalID = 0;


    startQuiz.addEventListener('click', countDown);
    startQuiz.addEventListener('click', questionOne);




function countDown(event) {
    event.preventDefault();

    document.getElementById('principal-page').style.display = 'none';

    var counter = document.querySelector('#counter');

    refreshIntervalID = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            counter.innerHTML = 'Time: ' + timeLeft;
        } else {
            document.getElementById('principal-page').style.display = 'block';
            document.getElementById('question-section').style.display = 'none';
            document.getElementById('results').style.display = 'none';
            document.getElementById('highscores').style.display = 'none';
        }
    }, 1000);
}



function questionOne() {
    var questions = document.getElementById('questions1');
        questions.innerHTML = quiz[0].question;

        for (var i = 0; i < quiz[0].options.length; i++) {
            var multipleChoices = document.getElementById('options');
            var button = document.createElement('button');
            button.className = 'buttonOptions' + i;
            multipleChoices.append(button);
            button.innerHTML = quiz[0].options[i];

        }
        var buttonOptions1 = document.querySelector('.buttonOptions0');
        var buttonOptions2 = document.querySelector('.buttonOptions1');
        var buttonOptions3 = document.querySelector('.buttonOptions2');
        var buttonOptions4 = document.querySelector('.buttonOptions3');
        buttonOptions1.addEventListener('click', function () {
            answerButton(0,0)
        });
        buttonOptions2.addEventListener('click', function () {
            answerButton(0,1)
        });
        buttonOptions3.addEventListener('click', function () {
            answerButton(0,2)
        });
        buttonOptions4.addEventListener('click', function () {
            answerButton(0,3)
        });
        buttonOptions1.addEventListener('click',questionTwo);
        buttonOptions2.addEventListener('click',questionTwo);
        buttonOptions3.addEventListener('click',questionTwo);
        buttonOptions4.addEventListener('click',questionTwo);
    }


function questionTwo() {
    var questions2 = document.getElementById('questions2');
    document.getElementById('quiz').style.display = 'none';
    questions2.innerHTML = quiz[1].question;

    for (var i = 0; i < quiz[1].options.length; i++) {
        var multipleChoices2 = document.getElementById('options2');
        var button2 = document.createElement('button');
        button2.className = 'button2Options' + i;
        multipleChoices2.append(button2);
        button2.innerHTML = quiz[1].options[i];

    }
    var button2Options1 = document.querySelector('.button2Options0');
    var button2Options2 = document.querySelector('.button2Options1');
    var button2Options3 = document.querySelector('.button2Options2');
    var button2Options4 = document.querySelector('.button2Options3');

    button2Options1.addEventListener('click', function () {
        answerButton(1,0)
    });
    button2Options2.addEventListener('click', function () {
        answerButton(1,1)
    });
    button2Options3.addEventListener('click', function () {
        answerButton(1,2)
    });
    button2Options4.addEventListener('click', function () {
        answerButton(1,3)
    });
    button2Options1.addEventListener('click',questionThree);
    button2Options2.addEventListener('click',questionThree);
    button2Options3.addEventListener('click',questionThree);
    button2Options4.addEventListener('click',questionThree);
}



function questionThree() {
    var questions3 = document.getElementById('questions3');
    document.getElementById('quiz2').style.display = 'none';
    questions3.innerHTML = quiz[2].question;

    for (var i = 0; i < quiz[2].options.length; i++) {
        var multipleChoices = document.getElementById('options3');
        var button = document.createElement('button');
        button.className = 'button3Options' + i;
        multipleChoices.append(button);
        button.innerHTML = quiz[2].options[i];

    }
    var button3Options1 = document.querySelector('.button3Options0');
    var button3Options2 = document.querySelector('.button3Options1');
    var button3Options3 = document.querySelector('.button3Options2');
    var button3Options4 = document.querySelector('.button3Options3');
    button3Options1.addEventListener('click', function () {
        answerButton(2,0)
    });
    button3Options2.addEventListener('click', function () {
        answerButton(2,1)
    });
    button3Options3.addEventListener('click', function () {
        answerButton(2,2)
    });
    button3Options4.addEventListener('click', function () {
        answerButton(2,3)
    });
    button3Options1.addEventListener('click',questionFour);
    button3Options2.addEventListener('click',questionFour);
    button3Options3.addEventListener('click',questionFour);
    button3Options4.addEventListener('click',questionFour);

}


function questionFour() {
    var questions4 = document.getElementById('questions4');
    document.getElementById('quiz3').style.display = 'none';
    questions4.innerHTML = quiz[3].question;

    for (var i = 0; i < quiz[3].options.length; i++) {
        var multipleChoices = document.getElementById('options4');
        var button = document.createElement('button');
        button.className = 'button4Options' + i;
        multipleChoices.append(button);
        button.innerHTML = quiz[3].options[i];

    }
    var button4Options1 = document.querySelector('.button4Options0');
    var button4Options2 = document.querySelector('.button4Options1');
    var button4Options3 = document.querySelector('.button4Options2');
    var button4Options4 = document.querySelector('.button4Options3');
    button4Options1.addEventListener('click', function () {
        answerButton(3,0)
    });
    button4Options2.addEventListener('click', function () {
        answerButton(3,1)
    });
    button4Options3.addEventListener('click', function () {
        answerButton(3,2)
    });
    button4Options4.addEventListener('click', function () {
        answerButton(3,3)
    });
    button4Options1.addEventListener('click',questionFive);
    button4Options2.addEventListener('click',questionFive);
    button4Options3.addEventListener('click',questionFive);
    button4Options4.addEventListener('click',questionFive);

}

var questions5 = document.getElementById('questions5');

function questionFive() {
    document.getElementById('quiz4').style.display = 'none';
    questions5.innerHTML = quiz[4].question;

    for (var i = 0; i < quiz[4].options.length; i++) {
        var multipleChoices = document.getElementById('options5');
        var button = document.createElement('button');
        button.className = 'button5Options' + i;
        multipleChoices.append(button);
        button.innerHTML = quiz[4].options[i];

    }
    var button5Options1 = document.querySelector('.button5Options0');
    var button5Options2 = document.querySelector('.button5Options1');
    var button5Options3 = document.querySelector('.button5Options2');
    var button5Options4 = document.querySelector('.button5Options3');
    button5Options1.addEventListener('click', function () {
        answerButton(4,0)
    });
    button5Options2.addEventListener('click', function () {
        answerButton(4,1)
    });
    button5Options3.addEventListener('click', function () {
        answerButton(4,2)
    });
    button5Options4.addEventListener('click', function () {
        answerButton(4,3)
    });
    button5Options1.addEventListener('click',gameOver);
    button5Options2.addEventListener('click',gameOver);
    button5Options3.addEventListener('click',gameOver);
    button5Options4.addEventListener('click',gameOver);

}

function answerButton(questionNumber, answerUser) {
    var car = quiz[questionNumber];
    var result = document.getElementById('question-result');
    var resultDisplayed = document.getElementById('resultdisplayed');

    if (car.answer === car.options[answerUser]) {
        
        document.getElementById('question-result').style.display = 'block';
            resultDisplayed.innerHTML = 'Correct!';

        setTimeout(() => {

            document.getElementById('question-result').style.display = 'none';
            
        }, 1500);
            
    } else {
        timeLeft = timeLeft - 10;

        document.getElementById('question-result').style.display = 'block';
        resultDisplayed.innerHTML = 'Wrong!';

        setTimeout(() => {

            document.getElementById('question-result').style.display = 'none';
            
        }, 1500);
        
    }

}

function gameOver(){

clearInterval(refreshIntervalID);

document.getElementById('quiz5').style.display = 'none';
document.getElementById('gameover').style.display = 'block'

var score = document.getElementById('score');

var counter = document.getElementById('counter');

counter.innerHTML = 'Time: ' + timeLeft;

score.innerHTML = 'Your final score is: ' + timeLeft;

document.getElementById('initials').addEventListener('click', saveToLocalStorage);

}

function saveToLocalStorage (){

    document.getElementById('gameover').style.display = 'none';
    document.getElementById('highscores').style.display = 'block';

    var enterInitials = document.getElementById('enterinitials');
    localStorage.setItem('initials', enterInitials.value + ' - ' + timeLeft);
    
   var listStoraged = document.getElementById('list-storaged');

   var listDisplayed = document.createElement('li');

   listStoraged.append(listDisplayed);

   var initialStoraged = localStorage.getItem('initials');

   listDisplayed.innerHTML = initialStoraged;

   var goBack = document.getElementById('goback');

    goBack.addEventListener('click', getBack);

    var clearScore = document.getElementById('clearscores');

    clearScore.addEventListener('click', function (){
    
        localStorage.clear();
        listStoraged.removeChild(listDisplayed);

    })

}

function getBack(){
    location.reload();
}

