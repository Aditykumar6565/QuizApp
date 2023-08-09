const questions = [
    {
        question: "Which is the largest animal in th world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question: "How many days are there in a year?",
        answers: [
            {text: "30", correct: false},
            {text: "31", correct: false},
            {text: "365", correct: true},
            {text: "28", correct: false},

        ]
    },
    {
        question: "Rainbows consist of how many colors?",
        answers: [
            {text: "4", correct: false},
            {text: "3", correct: false},
            {text: "7", correct: true},
            {text: "1", correct: false},

        ]
    },
    {
        question: "Which animal is known as the 'Ship of the Desert?",
        answers: [
            {text: "Camel", correct: true},
            {text: "Whale", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question: "Which is the largest animal in th world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question: "Which is the largest bone in the human body?",
        answers: [
            {text: "Skull", correct: false},
            {text: "Femur", correct: true},
            {text: "Finger", correct: false},
            {text: "Backbone", correct: false},

        ]
    },
];
const questionElements =document.getElementById("question");
const answerButton =document.getElementsById("answer-button");
const nextButton =document.getElementsById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(anserButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}
startQuiz();