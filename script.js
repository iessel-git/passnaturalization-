const questions = [
  {
    id: 1,
    question_en: "What is the supreme law of the land?",
    question_twi: "Dɛn ne mmara titiriw a ɛwɔ asase so?",
    answer_en: "The Constitution"
  },
  {
    id: 2,
    question_en: "What does the Constitution do?",
    question_twi: "Dɛn na Mmara Kɛse no yɛ?",
    answer_en: "Sets up the government"
  },
  {
    id: 3,
    question_en: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    question_twi: "Nkwam a yɛn ho yɛ yɛn dea no wɔ mmara no mfiase nsɛm mmiɛnsa no mu. Dɛn ne nsɛm no?",
    answer_en: "We the People"
  }
];

let currentIndex = 0;

function displayQuestion(index) {
  document.getElementById("question-en").textContent = questions[index].question_en;
  document.getElementById("question-twi").textContent = questions[index].question_twi;
  document.getElementById("answer-en").textContent = questions[index].answer_en;
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  displayQuestion(currentIndex);
}

function prevQuestion() {
  currentIndex = (currentIndex - 1 + questions.length) % questions.length;
  displayQuestion(currentIndex);
}

// Show the first question when page loads
window.onload = () => displayQuestion(currentIndex);
