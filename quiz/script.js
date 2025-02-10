const questions = {
    general: {
        easy: [
            { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: "Paris", type: "mcq" },
            { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7", type: "mcq" },
            { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific", type: "mcq" },
            { question: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: "Mercury", type: "mcq" },
            { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Pound"], answer: "Yen", type: "mcq" },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: "William Shakespeare", type: "mcq" },
            { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au", type: "mcq" },
            { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan", type: "mcq" },
            { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], answer: "Blue Whale", type: "mcq" },
            { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", type: "mcq" }
        ],
        medium: [
            { question: "Which country hosted the first-ever FIFA World Cup in 1930?", options: ["Brazil", "Germany", "Uruguay", "Italy"], answer: "Uruguay", type: "mcq" },
            { question: "What is the chemical symbol for the element with atomic number 79?", options: ["Ag", "Au", "Pb", "Pt"], answer: "Au", type: "mcq" },
            { question: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Ada Lovelace"], answer: "Charles Babbage", type: "mcq" },
            { question: "Which country is home to the Great Barrier Reef?", options: ["Australia", "USA", "Indonesia", "Mexico"], answer: "Australia", type: "mcq" },
            { question: "Who painted the famous artwork 'Starry Night'?", options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"], answer: "Vincent van Gogh", type: "mcq" },
            { question: "Which planet has the most moons in our Solar System?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn", type: "mcq" },
            { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Kalahari"], answer: "Antarctic", type: "mcq" },
            { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"], answer: "Alexander Fleming", type: "mcq" },
            { question: "Which ancient wonder was located in Egypt?", options: ["Hanging Gardens of Babylon", "Colossus of Rhodes", "Great Pyramid of Giza", "Temple of Artemis"], answer: "Great Pyramid of Giza", type: "mcq" },
            { question: "Which is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River", type: "mcq" }
        ],
        hard: [
            { question: "What is the only metal that is liquid at room temperature?", options: ["Mercury", "Gallium", "Cesium", "Lead"], answer: "Mercury", type: "mcq" },
            { question: "Who was the first person to win two Nobel Prizes?", options: ["Marie Curie", "Albert Einstein", "Linus Pauling", "Madame Curie"], answer: "Marie Curie", type: "mcq" },
            { question: "Which ancient civilization built Machu Picchu?", options: ["Aztecs", "Incas", "Mayans", "Egyptians"], answer: "Incas", type: "mcq" },
            { question: "Which gas is the most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen", type: "mcq" },
            { question: "What is the only mammal capable of true flight?", options: ["Flying Squirrel", "Sugar Glider", "Bat", "Colugo"], answer: "Bat", type: "mcq" },
            { question: "Which treaty ended World War I?", options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Brest-Litovsk"], answer: "Treaty of Versailles", type: "mcq" },
            { question: "Who developed the polio vaccine?", options: ["Louis Pasteur", "Edward Jenner", "Jonas Salk", "Robert Koch"], answer: "Jonas Salk", type: "mcq" },
            { question: "Which country has the highest number of time zones?", options: ["USA", "Russia", "France", "China"], answer: "France", type: "mcq" },
            { question: "What is the mathematical term for a number that can only be divided by 1 and itself?", options: ["Prime Number", "Composite Number", "Factorial", "Rational Number"], answer: "Prime Number", type: "mcq" },
            { question: "What is the rarest naturally occurring element on Earth?", options: ["Francium", "Astatine", "Radon", "Technetium"], answer: "Astatine", type: "mcq" }
        ]
    },
    science: {
        easy: [
            { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", type: "mcq" },
            { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars", type: "mcq" },
            { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], answer: "300,000 km/s", type: "mcq" },
            { question: "What is the smallest unit of life?", options: ["Cell", "Atom", "Molecule", "Organ"], answer: "Cell", type: "mcq" },
            { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen", type: "mcq" }
        ],
        medium: [
            { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O", type: "mcq" },
            { question: "What part of the plant conducts photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flowers"], answer: "Leaves", type: "mcq" },
            { question: "Which gas do humans breathe in for survival?", options: ["Oxygen", "Carbon Dioxide", "Helium", "Nitrogen"], answer: "Oxygen", type: "mcq" },
            { question: "How many planets are in our Solar System?", options: ["7", "8", "9", "10"], answer: "8", type: "mcq" },
            { question: "What force keeps us on the ground?", options: ["Friction", "Magnetism", "Gravity", "Electricity"], answer: "Gravity", type: "mcq" },
            { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: "Mitochondria", type: "mcq" },
            { question: "Which organ in the human body pumps blood?", options: ["Lungs", "Brain", "Liver", "Heart"], answer: "Heart", type: "mcq" },
            { question: "What is the primary source of energy for the Earth?", options: ["Moon", "Sun", "Stars", "Lightning"], answer: "Sun", type: "mcq" },
            { question: "What do bees collect from flowers to make honey?", options: ["Water", "Nectar", "Pollen", "Sap"], answer: "Nectar", type: "mcq" },
            { question: "Which of these is a solid form of water?", options: ["Steam", "Rain", "Ice", "Clouds"], answer: "Ice", type: "mcq" }
        ],
        hard: [
            { question: "What is the heaviest naturally occurring element?", options: ["Uranium", "Plutonium", "Osmium", "Thorium"], answer: "Uranium", type: "mcq" },
            { question: "Which subatomic particle has no charge?", options: ["Proton", "Electron", "Neutron", "Photon"], answer: "Neutron", type: "mcq" },
            { question: "What is the process by which plants lose water through their leaves?", options: ["Respiration", "Photosynthesis", "Transpiration", "Condensation"], answer: "Transpiration", type: "mcq" },
            { question: "Which scientist developed the Theory of General Relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], answer: "Albert Einstein", type: "mcq" },
            { question: "What type of bond forms between water molecules?", options: ["Ionic Bond", "Covalent Bond", "Hydrogen Bond", "Metallic Bond"], answer: "Hydrogen Bond", type: "mcq" },
            { question: "What is the SI unit of electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere", type: "mcq" },
            { question: "Which type of electromagnetic wave has the highest frequency?", options: ["Radio Waves", "X-Rays", "Microwaves", "Gamma Rays"], answer: "Gamma Rays", type: "mcq" },
            { question: "What is the second most abundant element in Earth's crust?", options: ["Oxygen", "Silicon", "Aluminum", "Iron"], answer: "Silicon", type: "mcq" },
            { question: "Which gas is produced in large amounts by plants during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"], answer: "Oxygen", type: "mcq" }
        ]
    },
    history: {
        easy: [
            { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington", type: "mcq" },
            { question: "In which year did World War II end?", options: ["1945", "1939", "1941", "1950"], answer: "1945", type: "mcq" },
            { question: "Who discovered America?", options: ["Christopher Columbus", "Vasco da Gama", "James Cook", "Ferdinand Magellan"], answer: "Christopher Columbus", type: "mcq" },
            { question: "Which ancient civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Mayans"], answer: "Egyptians", type: "mcq" },
            { question: "Who was the first man to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], answer: "Neil Armstrong", type: "mcq" }
        ],
        medium: [
            { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington", type: "mcq" },
            { question: "Which ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Mayans"], answer: "Egyptians", type: "mcq" },
            { question: "What year did World War II end?", options: ["1943", "1945", "1950", "1939"], answer: "1945", type: "mcq" },
            { question: "Who is known as the 'Father of India'?", options: ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"], answer: "Mahatma Gandhi", type: "mcq" },
            { question: "Which country was the first to land a man on the moon?", options: ["Soviet Union", "China", "United States", "Germany"], answer: "United States", type: "mcq" },
            { question: "What was the name of the ship that carried the Pilgrims to America in 1620?", options: ["Santa Maria", "Mayflower", "Titanic", "Beagle"], answer: "Mayflower", type: "mcq" },
            { question: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Nero", "Augustus", "Constantine"], answer: "Augustus", type: "mcq" },
            { question: "Which war was fought between the North and South regions of the United States?", options: ["World War I", "Revolutionary War", "Civil War", "Vietnam War"], answer: "Civil War", type: "mcq" },
            { question: "Which empire was ruled by Genghis Khan?", options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Persian Empire"], answer: "Mongol Empire", type: "mcq" },
            { question: "What year did Christopher Columbus reach the Americas?", options: ["1492", "1607", "1776", "1519"], answer: "1492", type: "mcq" }
        ],
        hard: [
            { question: "Which treaty officially ended World War I?", options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Tordesillas"], answer: "Treaty of Versailles", type: "mcq" },
            { question: "Who was the British Prime Minister during most of World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Margaret Thatcher", "Clement Attlee"], answer: "Winston Churchill", type: "mcq" },
            { question: "What was the capital of the Byzantine Empire?", options: ["Athens", "Rome", "Constantinople", "Alexandria"], answer: "Constantinople", type: "mcq" },
            { question: "The Hundred Years' War was fought between which two countries?", options: ["France and Spain", "England and Germany", "France and England", "Italy and Austria"], answer: "France and England", type: "mcq" },
            { question: "Who was the first ruler of the Mughal Empire?", options: ["Shah Jahan", "Akbar", "Babur", "Aurangzeb"], answer: "Babur", type: "mcq" },
            { question: "Which Chinese dynasty was responsible for the construction of most of the Great Wall?", options: ["Ming", "Qin", "Tang", "Han"], answer: "Ming", type: "mcq" },
            { question: "The Rosetta Stone helped scholars decipher which ancient language?", options: ["Greek", "Sumerian", "Hieroglyphics", "Latin"], answer: "Hieroglyphics", type: "mcq" },
            { question: "Which civilization is credited with creating the first known written language?", options: ["Egyptians", "Romans", "Sumerians", "Greeks"], answer: "Sumerians", type: "mcq" },
            { question: "Which explorer led the first successful expedition to circumnavigate the world?", options: ["Christopher Columbus", "Ferdinand Magellan", "James Cook", "Vasco da Gama"], answer: "Ferdinand Magellan", type: "mcq" },
            { question: "Which battle marked the final defeat of Napoleon Bonaparte?", options: ["Battle of Leipzig", "Battle of Trafalgar", "Battle of Austerlitz", "Battle of Waterloo"], answer: "Battle of Waterloo", type: "mcq" }
        ]
    }
};

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer;
let timeLeft = 30;
let quizQuestions = [];
let scoreBreakdown = [];

function startQuiz() {
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    quizQuestions = questions[category][difficulty];
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    scoreBreakdown = [];
    initializeQuiz();
}

function initializeQuiz() {
    showQuestion();
    updateProgress();
    startTimer();
}

function showQuestion() {
    const questionEl = document.querySelector('.question');
    const optionsContainer = document.querySelector('.options-container');
    const questionNumberEl = document.querySelector('.question-number');
    const feedbackEl = document.querySelector('.feedback');
    
    feedbackEl.textContent = '';
    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    questionEl.textContent = quizQuestions[currentQuestion].question;
    
    optionsContainer.innerHTML = '';
    quizQuestions[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectAnswer(option, button);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(option, button) {
    if (selectedAnswer) {
        selectedAnswer.classList.remove('selected');
    }
    selectedAnswer = button;
    button.classList.add('selected');
}

function nextQuestion() {
    if (!selectedAnswer) {
        alert('Please select an answer!');
        return;
    }

    const feedbackEl = document.querySelector('.feedback');
    const isCorrect = selectedAnswer.textContent === quizQuestions[currentQuestion].answer;
    if (isCorrect) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');
    } else {
        feedbackEl.textContent = `Incorrect! The correct answer is: ${quizQuestions[currentQuestion].answer}`;
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');
    }

    scoreBreakdown.push({
        question: quizQuestions[currentQuestion].question,
        correct: isCorrect
    });

    currentQuestion++;
    selectedAnswer = null;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
        updateProgress();
        resetTimer();
    } else {
        showScore();
    }
}

function updateProgress() {
    const progress = (currentQuestion / quizQuestions.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

function showScore() {
    clearInterval(timer);
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.controls').style.display = 'none';
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.style.display = 'block';
    document.querySelector('.score').textContent = `${score}/${quizQuestions.length}`;

    const scoreBreakdownEl = document.querySelector('.score-breakdown');
    scoreBreakdownEl.innerHTML = '';
    scoreBreakdown.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Q${index + 1}: ${item.question} - ${item.correct ? 'Correct' : 'Incorrect'}`;
        scoreBreakdownEl.appendChild(li);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    scoreBreakdown = [];
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.controls').style.display = 'flex';
    document.querySelector('.score-container').style.display = 'none';
    initializeQuiz();
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Initialize the quiz when the page loads
startQuiz();