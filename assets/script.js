//////////////// VARIABLES ////////////////////

const homeEl = document.getElementById("homepage");
const startBtn = document.getElementById("start-btn");
const quizEl = document.getElementById("quizpage");
const resultsEl = document.getElementById("results-page");

const quizHeaderEl = document.getElementById("quiz-header");
const choicesEl = document.getElementById("choices-container");
const proceedEl = document.getElementById("proceed-container");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");

// Leaderboards Variables
const scoreEl = document.getElementById("final-score");
const formEl = document.getElementById("submit-score");


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
let time = 60;
let timerID; // Needed to identify


//////////// QUIZ PAGE FUNCTIONS /////////////////

// Initializes quiz features
const startQuiz = () => {
    homeEl.style.display = "none";
    quizEl.style.display = "block";
    resultsEl.style.display = "none";

    displayQuestion();

    timerID = setInterval(countDown, 10); // Runs 
};

// Function that will run every 10 milliseconds
const countDown = () => {
    timerEl.textContent = `Score: ${time.toFixed([2])}`; // toFixed keeps it confined to 2 decimal places
    time -= 0.01;
    if (time === 0) {
        endQuiz();
    }
}

// Function used each time a new question needs to be pulled
const displayQuestion = () => {

    // Creates and appends question and timer
    console.log(questionsArray[currentQuestion][0])
    questionEl.textContent = questionsArray[currentQuestion][0];

    // Creates and appends 4 choices
    for (i = 0; i < 4; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = `${currentChoice}. ${questionsArray[currentQuestion][currentChoice]}`;
        choiceBtn.setAttribute("data-number", currentChoice)
        choiceBtn.addEventListener("click", answerResponse);
        choicesEl.append(choiceBtn);
        
        currentChoice++; // Increases currentChoice so that each button is unique

    }

    // Reverts currentChoice back to default for the next question
    currentChoice = 1;
}

// Function that reacts to the users selection
const answerResponse = event => {
    clearInterval(timerID); // Pauses timer
    choicesEl.childNodes.forEach(button => button.removeEventListener("click", answerResponse)); // Deactivates other buttons

    // Variables
    const choice = event.currentTarget;
    const choiceValue = event.currentTarget.getAttribute("data-number");
    const answer = questionsArray[currentQuestion][5];

    // Sets the color of the choice if true or false
    if (choiceValue === answer) {
        choice.style.background = "green";
    } else {
        choice.style.background = "red";
        time -= 10;
        timerEl.textContent = `Score: ${time.toFixed([2])}`;
    }

    currentQuestion++;
    choicesEl.childNodes.forEach(button => button.removeEventListener("click", answerResponse));
    createNextBtn(); 
}

// Shows result of users choice and adds next button
const createNextBtn = () => {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "NEXT";
    nextBtn.addEventListener("click", () => {
        // Sets next question unless it's the last question
        if (currentQuestion < questionsArray.length) {
            quizHeaderEl.textContent = ""; // Clears question
            clearChildren(choicesEl); // Clears choices
            displayQuestion();
            timerID = setInterval(countDown, 10);
        } else {
            endQuiz();
        }

        clearChildren(proceedEl); // Clears next button
    });
    proceedEl.append(nextBtn);
}

const endQuiz = function() {
    homeEl.style.display = "none";
    quizEl.style.display = "none";
    resultsEl.style.display = "block";

    scoreEl.textContent = `Final Score: ${time.toFixed([2])}`;
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!localStorage.getItem("scores")) {
            const user = document.getElementById("initials").value.trim();
            const userData = {
                name: user,
                score: time.toFixed([2]),
            };
            let scoresArray = [];
            scoresArray.push(userData);
            localStorage.setItem("scores", JSON.stringify(scoresArray));
        } else {
            const user = document.getElementById("initials").value.trim();
            const userData = {
                name: user,
                score: time.toFixed([2]),
            };

            let scoresArray = (localStorage.getItem("scores"));
            let scores = JSON.parse(scoresArray);
            scores.push(userData);
            localStorage.setItem("scores", JSON.stringify(scores));
        };

        loadHighScores();
    });
};

const loadHighScores = function() {
    window.location.href = "/leaderboards.html";

}


// Used to remove all button elements from the page
const clearChildren = containerEl => {
    while (containerEl.firstChild) {
        containerEl.removeChild(containerEl.firstChild);
    };
};

// Start button on the homepage
startBtn.addEventListener("click", startQuiz);