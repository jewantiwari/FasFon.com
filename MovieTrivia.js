const questions = [
    {
        question: "In which movie does Leonardo DiCaprio play the character Jordan Belfort, a stockbroker who engages in fraudulent activities?",
        answers: [
            {text: "The Great Gatsby ", correct: false},
            {text: "The Wolf of Wall Street", correct: true},
            {text: "Inception", correct: false},
            {text: "The Revenant", correct: false}
        ]
    },
    {
        question: "Who directed the science fiction epic film Interstellar released in 2014?",
        answers: [
            {text: "James Cameron ", correct: false},
            {text: "Steven Spielberg", correct: false},
            {text: "Christopher Nolan", correct: true},
            {text: "Ridley Scott", correct: false}
        ]  
    },
    {
        question: "Which animated film tells the story of a young lion cub named Simba and his journey to become king of the Pride Lands?",
        answers: [
            {text: "Finding Nemo", correct: false},
            {text: "Madagascar", correct: false},
            {text: "Ice Age", correct: false},
            {text: "The Lion King", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex=0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

    function resetState(){
        nextButton.style.display = "none";
        while (answerButton.firstChild){
            answerButton.removeChild(answerButton.firstChild);
        }
    }


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    //steps to disable all colors being shown while clicked
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();