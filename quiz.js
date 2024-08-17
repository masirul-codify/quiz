let currentQuestion = 11;
let totalQuestions = 37;
let timeRemaining = 2606; // Total seconds for 43:26 (43 * 60 + 26)

// Update the question number
document.getElementById('question-number').innerText = currentQuestion;

// Update the progress bar
const progressBar = document.getElementById('progress-bar');
progressBar.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
progressBar.setAttribute('aria-valuenow', (currentQuestion / totalQuestions) * 100);

// Timer function
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('time-remaining').innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    timeRemaining--;

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        // Handle time over logic
        alert('Time is up!');
    }
}

// Start the timer
const timerInterval = setInterval(updateTimer, 1000);

// Handle navigation (Next/Back buttons)
const nextButton = document.querySelector('.btn-primary');
nextButton.addEventListener('click', () => {
    // Logic to go to the next question
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        document.getElementById('question-number').innerText = currentQuestion;
        progressBar.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    }
});

const backButton = document.querySelector('.btn-secondary');
backButton.addEventListener('click', () => {
    // Logic to go to the previous question
    if (currentQuestion > 1) {
        currentQuestion--;
        document.getElementById('question-number').innerText = currentQuestion;
        progressBar.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    }
});
