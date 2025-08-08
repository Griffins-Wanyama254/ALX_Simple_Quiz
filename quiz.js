function checkAnswer() {
    // Step 1: Identify the correct answer
    let correctAnswer = "4";

    // Step 2: Retrieve the user's answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option was selected
    if (selectedOption) {
        let userAnswer = selectedOption.value;

        // Step 3: Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
