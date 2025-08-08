// Function Declaration
function checkAnswer() {
    // Correct Answer
    let correctAnswer = "4";

    // Retrieve user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Compare answers and give feedback
    let feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
let submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
