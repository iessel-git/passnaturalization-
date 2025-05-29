document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
  }
});

let currentIndex = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  const app = document.getElementById('app');
  app.innerHTML = `
  <img src="images/logo.jpg" alt="Logo" style="max-width: 100px; margin-bottom: 1rem;" />
    <h1>Question ${q.id}</h1>
    <p><strong>English:</strong> ${q.question_en}</p>
    <p><strong>Twi:</strong> ${q.question_twi}</p>
    <button onclick="showAnswer()">Show Answer</button>
  `;
}

function showAnswer() {
  const q = questions[currentIndex];
  const app = document.getElementById('app');
  app.innerHTML = `
  <img src="images/logo.jpg" alt="Logo" style="max-width: 100px; margin-bottom: 1rem;" />
    <h1>Question ${q.id}</h1>
    <p><strong>English:</strong> ${q.question_en}</p>
    <p><strong>Twi:</strong> ${q.question_twi}</p>
    <p><strong>Answer:</strong> ${q.answer_en}</p>
    <div class="nav-buttons">
      <button onclick="prevQuestion()" ${currentIndex === 0 ? "disabled" : ""}>Previous</button>
      <button onclick="nextQuestion()">${currentIndex < questions.length - 1 ? "Next" : "Finish"}</button>
    </div>
  `;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    document.getElementById('app').innerHTML = `
      <h1>You've completed the quiz!</h1>
      <button onclick="location.reload()">Start Over</button>
    `;
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}
