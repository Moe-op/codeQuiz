// Function to display the final score
function displayScore() {
    const finalScoreElement = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
  
    finalScoreElement.textContent = score;
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
  }
  