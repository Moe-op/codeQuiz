// A start button that when clicked a timer starts and the first question appears.
create start function
add timer variable
event handler for start button

// Question data structure
Display questions
create buttons for each answer
link the correct answer to score
const questions = [
  {
    question: "What is  CSS?",
    answers: ["Languge", "CMS", "Blockchain", "Web3"],
    correctAnswer: "Paris"
  },

];

// Function to start the quiz
function startQuiz() {
  // Initialize variables
  currentQuestionIndex = 0;
  score = 0;

  // Display the first question
  displayQuestion();

  // Start the timer
  startTimer();
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  // Display currentQuestion.question and currentQuestion.answers (HTML/CSS manipulation)
  // Attach event listeners to answer buttons to handle clicks
}

// Function for next question

// Function to handle user answer click
function handleAnswerClick(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the answer is correct
  if (answer === currentQuestion.correctAnswer) {
    score += 1; // Increase score for correct answers
  } else {
    // Subtract time for incorrect answers
    // Adjust the time penalty as needed
    // e.g., subtract 10 seconds for each incorrect answer
    subtractTime(10);
  }

  // Move to the next question
  currentQuestionIndex += 1;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    // Display the next question
    displayQuestion();
  } else {
    // No more questions, end the quiz
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  // Initialize the timer (setInterval) to update the time remaining every second
  // When time reaches 0, end the quiz
}

// Function to subtract time
function subtractTime(seconds) {
  // Subtract the specified seconds from the timer
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timer);

  // Display the final score and prompt for initials (HTML/CSS manipulation)
  displayScore();
}

// Function to display the final score and prompt for initials
function displayScore() {
  // Display the final score
  // Prompt the user to enter initials and save the score
  // Optionally, save the score and initials to a high score list or other storage
}

