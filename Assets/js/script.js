var start = document.getElementById('start');
var quiz = document.getElementById('quiz');
var question = document.getElementById('question'); 
var choiceA = document.getElementById('a');
var choiceB = document.getElementById('b');
var choiceC = document.getElementById('c');
var choiceD = document.getElementById('d');
var timer = document.getElementById('timer');
var greeting = document.getElementById('greeting');
var startBtn = document.getElementById('startBtn');


//Array of objects to hold questions and respective answers
var questions = [
    {
        question: 'Javascript is an ________ programming language.',
        choiceA: 'Object-Oriented',
        choiceB: 'Object-Based',
        choiceC: 'Procedural',
        choiceD: 'None of the above',
        correct: 'A'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choiceA: 'let',
        choiceB: 'var',
        choiceC: 'Both A and B',
        choiceD: 'none of the above',
        correct: 'C'
    },
    {
        question: 'Which of the following methods is used to access HTML elements using javascript',
        choiceA: 'getElementById()',
        choiceB: 'getElementsByClassName()',
        choiceC: 'Both A and B',
        choiceD: 'None of the above',
        correct: 'C'
    },
    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        choiceA: 'document.write()',
        choiceB: 'console.log()',
        choiceC: 'window.alert()',
        choiceD: 'All of the Above',
        correct: 'D'
    },
    {
        question: 'How can a datatype be declared to be a constant type',
        choiceA: 'const',
        choiceB: 'var',
        choiceC: 'let',
        choiceD: 'constant',
        correct: 'A'
    }
]

