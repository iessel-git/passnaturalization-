document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const savedIndex = localStorage.getItem("progressIndex");
      const lastVisit = localStorage.getItem("lastVisit");

      if (savedIndex !== null) {
        const resume = confirm(
          `Resume where you left off? (Question ${parseInt(savedIndex) + 1})\nLast visit: ${lastVisit}`
        );
        if (resume) {
          currentIndex = parseInt(savedIndex);
        }
      }

      startQuiz();
    });
  }
});

let currentIndex = 0;
let sessionStartIndex = 0;

function startQuiz() {
  localStorage.setItem("lastVisit", new Date().toLocaleString());
  sessionStartIndex = currentIndex;
  showQuestion();
}

function saveProgress() {
  localStorage.setItem("progressIndex", currentIndex);
}

function resetProgress() {
  localStorage.removeItem("progressIndex");
  localStorage.removeItem("lastVisit");
  currentIndex = 0;
  sessionStartIndex = 0;
  showQuestion();
}

function showProgressBar() {
  const percentage = ((currentIndex + 1) / questions.length) * 100;
  return `
    <div style="background: #ccc; border-radius: 20px; height: 10px; margin: 10px 0;">
      <div style="width: ${percentage}%; background: #1a1aff; height: 10px; border-radius: 20px;"></div>
    </div>
  `;
}

function sessionProgress() {
  return `
    <p style="font-size: 0.9rem; color: #333;">
      Questions completed this session: ${currentIndex - sessionStartIndex}
    </p>
  `;
}

function commonHeader(q) {
  return `
    <img src="images/logo.jpg" alt="Logo" style="max-width: 100px; margin-bottom: 1rem;" />
    <h1>Question ${q.id} of ${questions.length}</h1>
    ${showProgressBar()}
    ${sessionProgress()}
    <button onclick="resetProgress()" style="margin-bottom: 10px; background: red; color: white;">Reset Progress</button>
  `;
}

function showQuestion() {
  saveProgress();
  const q = questions[currentIndex];
  const app = document.getElementById('app');
  app.innerHTML = `
    ${commonHeader(q)}
    <p><strong>English:</strong> ${q.question_en}</p>
    <p><strong>Twi:</strong> ${q.question_twi}</p>
    <button onclick="showAnswer()">Show Answer</button>
  `;
}

function showAnswer() {
  saveProgress();
  const q = questions[currentIndex];
  const app = document.getElementById('app');

  // Dynamically determine if it's the first or last question
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  app.innerHTML = `
    ${commonHeader(q)}
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
    localStorage.removeItem("progressIndex");
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1>You've completed the quiz!</h1>
      <p>You answered ${questions.length} questions.</p>
      <button onclick="restartQuiz()">Start Over</button>
      <button onclick="resetProgress()">Reset Progress</button>
    `;
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

function restartQuiz() {
  currentIndex = 0;
  sessionStartIndex = 0;
  localStorage.removeItem("progressIndex");
  showQuestion();
}
