let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: 1,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswer: 0,
    }
];

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        const optionButtons = document.querySelectorAll("#options button");
        currentQuestion.options.forEach((option, index) => {
            optionButtons[index].textContent = option;
        });
        document.getElementById("next-btn").style.display = "none";
    } else {
        showResult();
    }
}

function nextQuestion(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "inline-block";
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadNextQuestion();
}

// Initial call to load the first question
loadNextQuestion();
