//////////////// VARIABLES ////////////////////

const homeEl = document.getElementById("homepage");
const startBtn = document.getElementById("start-btn");
const quizEl = document.getElementById("quizpage");
const quizHeaderEl = document.getElementById("quiz-header");
const choicesEl = document.getElementById("choices-container");
const proceedEl = document.getElementById("proceed-container");

// Nested arrays for easier reference
const questionsArray = [
    [
        "What does the acronym DOM stand for?",
        "Direct Option Master",
        "Document Object Model",
        "Differential Organizing Model",
        "Digital Operation Manual",
        "2"
    ],
    [
        "What is the proper JavaScript syntax for calling an object method?",
        ".method()",
        "[method()]",
        "#method",
        ".method{}",
        "1"
    ],
    [
        "HTML is a _______ language.",
        "Styling",
        "Programming",
        "Markup",
        "Coding",
        "3"
    ],
    [
        "What type of Web Developer is specifically in charge of client-side development?",
        "User-Side",
        "Back-End",
        "Full-Stack",
        "Front-End",
        "4"
    ],
    [
        "Which of these is a popular JavaScript library?",
        "Bootstrap",
        "jQuery",
        "Tailwind",
        "TensorFlow",
        "2"
    ],
];

// Variables used for calling unique questions and choices each time displayQuestion() is called
let currentQuestion = 0;
let currentChoice = 1;


//////////// QUIZ PAGE FUNCTIONS /////////////////

// Initializes quiz features
const startQuiz = () => {
    homeEl.style.display = "none";
    quizEl.style.display = "block";
    displayQuestion();
}

// Function used each time a new question needs to be pulled
const displayQuestion = () => {
    // Creates and appends question
    const questionEl = document.createElement("h3");
    questionEl.textContent = questionsArray[currentQuestion][0];
    quizHeaderEl.append(questionEl);

    // Creates and appends 4 choices
    for (i = 0; i < 4; i++) {
        const choice = document.createElement("button");
        choice.textContent = `${currentChoice}. ${questionsArray[currentQuestion][currentChoice]}`;
        choice.setAttribute("data-number", currentChoice)
        choicesEl.append(choice);
        
        // Increases currentChoice so that each button is unique
        currentChoice++;
    }

    // Reverts currentChoice back to default for the next question
    currentChoice = 1;
}




// Start button on the homepage
startBtn.addEventListener("click", startQuiz);