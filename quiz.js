const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Gold", "Oganesson"],
        correctAnswer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: 2
    },
    {
        question: "In which year did World War II end?",
        options: ["1941", "1943", "1945", "1947"],
        correctAnswer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Ernest Hemingway"],
        correctAnswer: 0
    },
    {
        question: "Which country is the largest by land area?",
        options: ["United States", "Russia", "Canada", "China"],
        correctAnswer: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: 1
    },
    {
        question: "Which planet is the hottest in the solar system?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        correctAnswer: 1
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Africa", "Asia", "Australia", "Europe"],
        correctAnswer: 0
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: 2
    },
    {
        question: "Which organ in the human body is primarily responsible for pumping blood?",
        options: ["Lungs", "Brain", "Heart", "Kidneys"],
        correctAnswer: 2
    },
    {
        question: "Which city is known as the 'Big Apple'?",
        options: ["San Francisco", "Chicago", "New York", "Los Angeles"],
        correctAnswer: 2
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "100,000 km/s"],
        correctAnswer: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Diamond", "Iron", "Silver"],
        correctAnswer: 1
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["Australia", "New Zealand", "South Africa", "Brazil"],
        correctAnswer: 0
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"],
        correctAnswer: 1
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1918", "1923"],
        correctAnswer: 0
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Elephant", "Giraffe"],
        correctAnswer: 1
    },
    {
        question: "Which element is the most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Denali"],
        correctAnswer: 1
    },
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: 1
    },
    {
        question: "Which planet has the most moons?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        correctAnswer: 1
    },
    {
        question: "Which instrument is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
        correctAnswer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1
    },
    {
        question: "Which element is found in all organic compounds?",
        options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Nagasaki"],
        correctAnswer: 0
    },
    {
        question: "Which country is known for the creation of the pizza?",
        options: ["France", "Italy", "Spain", "Greece"],
        correctAnswer: 1
    },
    {
        question: "Which artist painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        correctAnswer: 2
    },
    {
        question: "Which country is the origin of the Olympic Games?",
        options: ["Italy", "Egypt", "China", "Greece"],
        correctAnswer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Pb"],
        correctAnswer: 1
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let totalQuestions = quizData.length;
let score = 0;
let wrongAnswers = 0;

// Function to load the current question
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    document.querySelector('.question').innerText = questionData.question;

    const optionsContainer = document.querySelector('.dropdown-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    questionData.options.forEach((option, index) => {
        const selectElement = document.createElement('select');
        selectElement.className = 'form-select mb-3';
        selectElement.innerHTML = `<option selected>Select an option</option><option value="${index}">${option}</option>`;
        optionsContainer.appendChild(selectElement);
    });

    document.getElementById('question-number').innerText = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
}

// Function to check the answer and update the score
function checkAnswer() {
    const selectedOptions = document.querySelectorAll('.dropdown-container select');
    let isCorrect = true;

    selectedOptions.forEach((select, index) => {
        if (parseInt(select.value) !== quizData[currentQuestionIndex].correctAnswer) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        score++;
    } else {
        wrongAnswers++;
    }
}

// Event handler for the Next button
const nextButton = document.querySelector('.btn-primary');
nextButton.addEventListener('click', () => {
    checkAnswer();
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
});

// Event handler for the Back button
const backButton = document.querySelector('.btn-secondary');
backButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Function to show the final results
function showResults() {
    document.querySelector('.quiz-container').innerHTML = `
        <div class="card p-4">
            <h3>Your Score: ${score} / ${totalQuestions}</h3>
            <p>Correct Answers: ${score}</p>
            <p>Wrong Answers: ${wrongAnswers}</p>
        </div>
    `;
}

// Initialize the first question
loadQuestion();
