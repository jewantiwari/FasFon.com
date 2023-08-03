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
    },
    {
        question: "In which movie does Keanu Reeves play the character Neo, a computer programmer who discovers that reality is a simulated world created by machines?",
        answers: [
            {text: "The Matrix", correct: true},
            {text: "Inception", correct: false},
            {text: "Interstellar", correct: false},
            {text: "Blade Runner", correct: false}
        ]
     },
    {
            question: "Who directed the fantasy adventure film 'Avatar,' released in 2009?",
            answers: [
            {text: "Steven Spielberg", correct: false},
            {text: "James Cameron", correct: true},
            {text: "Christopher Nolan", correct: false},
            {text: "Peter Jackson", correct: false}
            ]
    },
    {
            question: "Who played the role of the Joker in the 2008 film 'The Dark Knight'?",
            answers: [
            {text: "Heath Ledger", correct: true},
            {text: "Joaquin Phoenix", correct: false},
            {text: "Jack Nicholson", correct: false},
            {text: "Jared Leto", correct: false}
            ]
    },
    {
        question: "Which movie is known for its famous line 'May the Force be with you.'?",
        answers: [
        {text: "Star Trek", correct: false},
        {text: "Star Wars", correct: true},
        {text: "Guardians of the Galaxy", correct: false},
        {text: "Interstellar", correct: false}
        ]
    },
    {
        question: "Which film won the Best Picture Oscar at the 2020 Academy Awards?",
        answers: [
        {text: "1917", correct: false},
        {text: "Parasite", correct: true},
        {text: "Joker", correct: false},
        {text: "Once Upon a Time in Hollywood", correct: false}
        ]
    },
    {
        question: "In the movie 'Forrest Gump', what is Forrest's favorite candy?",
        answers: [
        {text: "M&Ms", correct: true},
        {text: "Skittles", correct: false},
        {text: "Twix", correct: false},
        {text: "Snickers", correct: false}
        ]
    },
    {
        question: "Which movie features a group of superheroes including Iron Man, Captain America, and Thor?",
        answers: [
        {text: "Justice League", correct: false},
        {text: "The Avengers", correct: true},
        {text: "X-Men", correct: false},
        {text: "Fantastic Four", correct: false}
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