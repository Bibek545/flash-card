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

const questionsFront = document.querySelector(".questions-front");
const questionsBack =document.querySelector(".questions-back")
const btns = document.querySelectorAll(".pagination .page-link") // for the next and previous buttons
const showAnswer = document.querySelector(".buttonShow") // this is for the show answer button

// adding or injecting the question and load them

function loadQuestion() {
    const current = questions[currentQuestionIndex];
    questionElement.innerText = `Question${currentQuestionIndex + 1}: ${current.question}`;


}
loadQuestion();

function loadAnswer() {
    const currentAnswer = questions[currentQuestionIndex];
    answerElement.innerText = `Answer is : ${currentAnswer.answer}`;
}

// loadAnswer();

showAnswer.addEventListener("click",() => {
   console.log("button clicked");
loadAnswer();
questionsFront.classList.toggle("hide");
questionsBack.classList.toggle("show");

});

// showAnswer.addEventListener("click", () => {
//     console.log("button clicked");s
// })