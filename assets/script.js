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
let timer = 60;


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
    quizHeaderEl.prepend(questionEl);

    // Creates and appends 4 choices
    for (i = 0; i < 4; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = `${currentChoice}. ${questionsArray[currentQuestion][currentChoice]}`;
        choiceBtn.setAttribute("data-number", currentChoice)
        choiceBtn.addEventListener("click", answerResponse)
        choicesEl.append(choiceBtn);
        
        currentChoice++; // Increases currentChoice so that each button is unique

    }

    // Reverts currentChoice back to default for the next question
    currentChoice = 1;
}

// Function that reacts to the users selection
const answerResponse = event => {
    const choice = event.currentTarget;
    const choiceValue = event.currentTarget.getAttribute("data-number");
    const answer = questionsArray[currentQuestion][5];

    // Sets the color of the choice if true or false
    if (choiceValue === answer) {
        choice.style.background = "green";
    } else {
        choice.style.background = "red";
    }

    currentQuestion++;
    createNextBtn(); 
    // pauseTimer();
}

const createNextBtn = () => {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "NEXT";
    nextBtn.addEventListener("click", () => {
        quizHeaderEl.removeChild(quizHeaderEl.firstChild); // Removes question but keeps timer
        clearChildren(choicesEl); // Clears choices
        displayQuestion(); // Sets next question
        clearChildren(proceedEl); // Clears next button
    });
    proceedEl.append(nextBtn);
}

const clearChildren = containerEl => {
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    };
};

// Start button on the homepage
startBtn.addEventListener("click", startQuiz);