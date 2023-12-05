// Variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60; 


// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 60;
  displayQuestion();
  startTimer();
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.getElementById("choices");

  questionTitle.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  // Create buttons for each answer
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswerClick(answer));
    choicesContainer.appendChild(button);
  });

  // Show the questions div and hide others
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("end-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
}

// Function to handle user answer click
function handleAnswerClick(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (answer === currentQuestion.correctAnswer) {
    score += 1;
  } else {
    subtractTime(10);
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timer = setInterval(function () {
    timeRemaining -= 1;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000); 
}

// Function to update the timer display
function updateTimerDisplay() {
  document.getElementById("time").textContent = timeRemaining;
}

// Function to subtract time
function subtractTime(seconds) {
  timeRemaining -= seconds;
  updateTimerDisplay();
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timer);
  displayScore();
}


document.getElementById("start").addEventListener("click", startQuiz);
