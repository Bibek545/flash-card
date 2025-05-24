// alert ("Welcome to my flash card");

const questions = [
    {
        question: 'What is my Name?',
        answer: 'Bibek Hamal'
    },
    {
        question: 'Where am I from?',
        answer: 'Nepal'
    },

]

// stateing a variables
let currentQuestionIndex = 0;
let questionCount = 0;

// DOM elements

const questionElement = document.querySelector(".questions-front p"); //this is for all the question
const answerElement = document.querySelector(".questions-back p"); // and this is for the answer
const btns = document.querySelectorAll(".pagination .page-link") // for the next and previous buttons
const showAnswer = document.querySelector(".buttonShow") // this is for the show answer button

// adding or injecting the question and load them

function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionElement.innerText = `Questions ${currentQuestionIndex + 1}: ${current.question}`;

    option
}