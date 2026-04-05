/**
 * game.js — Lógica Principal do Jogo
 * Depende de: data.js (questionsDB)
 */

/* ============================================================
   ESTADO DO JOGO
   ============================================================ */
const gameState = { 
  currentGame:     null, 
  currentQuestion: 0,
  score:           0,
  streak:          0,
  correctAnswers:  0,
  totalQuestions:  10,
  questions:       [],
  timeLimit:       0,
  timer:           null,
  startTime:       0,
  stats: {
    totalScore:  parseInt(localStorage.getItem('totalScore'))  || 0,
    totalGames:  parseInt(localStorage.getItem('totalGames'))  || 0,
    bestStreak:  parseInt(localStorage.getItem('bestStreak'))  || 0,
    achievements:parseInt(localStorage.getItem('achievements'))|| 0
  }
};

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  createParticles();
  updateStatsDisplay();
});

/* ============================================================
   PARTÍCULAS DE FUNDO
   ============================================================ */
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.top               = Math.random() * 100 + '%';
    p.style.animationDelay    = Math.random() * 15 + 's';
    p.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(p);
  }
}

/* ============================================================
   STATS (PLACAR GLOBAL)
   ============================================================ */
function updateStatsDisplay() {
  document.getElementById('totalScore').textContent  = gameState.stats.totalScore;
  document.getElementById('totalGames').textContent  = gameState.stats.totalGames;
  document.getElementById('bestStreak').textContent  = gameState.stats.bestStreak;
  document.getElementById('achievements').textContent= gameState.stats.achievements;
}

function saveStats() {
  Object.entries(gameState.stats).forEach(([key, val]) =>
    localStorage.setItem(key, val)
  );
}

/* ============================================================
   CONQUISTAS (TOAST)
   ============================================================ */
function showAchievement(text) {
  const toast = document.getElementById('achievementToast');
  document.getElementById('achievementText').textContent = text;
  toast.style.display = 'flex';
  setTimeout(() => { toast.style.display = 'none'; }, 3500);
}

/* ============================================================
   UTILITÁRIOS
   ============================================================ */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function letterLabel(index) {
  return String.fromCharCode(65 + index); // A, B, C, D
}

/* ============================================================
   INICIAR JOGO
   ============================================================ */
function startGame(gameType) {
  Object.assign(gameState, {
    currentGame:     gameType,
    currentQuestion: 0,
    score:           0,
    streak:          0,
    correctAnswers:  0,
    startTime:       Date.now(),
    timeLimit:       gameType === 'professional' ? 30 : 0,
    questions:       shuffleArray([...(questionsDB[gameType] || questionsDB.identification)])
                       .slice(0, gameState.totalQuestions)
  });

  document.getElementById('mainMenu').style.display   = 'none';
  document.getElementById('gameScreen').style.display = 'block';

  updateGameInfo();
  loadQuestion();
}

/* ============================================================
   HUD
   ============================================================ */
function updateGameInfo() {
  document.getElementById('currentScore').textContent    = gameState.score;
  document.getElementById('questionProgress').textContent=
    `${gameState.currentQuestion + 1}/${gameState.totalQuestions}`;
  document.getElementById('currentStreak').textContent   = gameState.streak;
  document.getElementById('timeRemaining').textContent   =
    gameState.timeLimit > 0 ? gameState.timeLimit + 's' : '--';
}

/* ============================================================
   CARREGAR QUESTÃO
   ============================================================ */
function loadQuestion() {
  if (gameState.currentQuestion >= gameState.totalQuestions) {
    endGame();
    return;
  }

  if (gameState.timer) clearInterval(gameState.timer);

  const q = gameState.questions[gameState.currentQuestion];

  const optionsHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="checkAnswer(${i})" data-option="${i}">
      <strong>${letterLabel(i)})</strong> ${opt}
    </button>
  `).join('');

  document.getElementById('gameContent').innerHTML = `
    <div class="question-card">
      <div class="question-number">Questão ${gameState.currentQuestion + 1} de ${gameState.totalQuestions}</div>
      <h2 class="question-text">${q.q}</h2>
      <div class="options-grid">${optionsHTML}</div>
    </div>
  `;

  updateGameInfo();
  if (gameState.timeLimit > 0) startTimer();
}

/* ============================================================
   TIMER (MODO PROFISSIONAL)
   ============================================================ */
function startTimer() {
  let timeLeft = gameState.timeLimit;
  document.getElementById('timeRemaining').textContent = timeLeft + 's';

  gameState.timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timeRemaining').textContent = timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(gameState.timer);
      checkAnswer(-1); // tempo esgotado = erro
    }
  }, 1000);
}

/* ============================================================
   VERIFICAR RESPOSTA
   ============================================================ */
function checkAnswer(selectedIndex) {
  if (gameState.timer) clearInterval(gameState.timer);

  const q         = gameState.questions[gameState.currentQuestion];
  const isCorrect = selectedIndex === q.correct;

  // Marcar botões
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct)                      btn.classList.add('correct');
    if (i === selectedIndex && !isCorrect)    btn.classList.add('incorrect');
  });

  // Atualizar pontuação
  if (isCorrect) {
    gameState.correctAnswers++;
    gameState.streak++;
    const bonus  = gameState.timeLimit > 0 ? 100 : 50;
    gameState.score += bonus + (gameState.streak * 10);

    if (gameState.streak === 5)  showAchievement('🔥 Sequência de 5! Você está pegando fogo!');
    if (gameState.streak === 10) {
      showAchievement('⚡ INCRÍVEL! 10 seguidas! Técnico Master!');
      gameState.stats.achievements++;
    }
  } else {
    gameState.streak = 0;
  }

  setTimeout(() => showFeedback(isCorrect, q), 800);
}

/* ============================================================
   FEEDBACK MODAL
   ============================================================ */
function showFeedback(isCorrect, q) {
  const modal   = document.getElementById('feedbackModal');
  const content = document.getElementById('feedbackContent');
  const isGreen = isCorrect;

  content.style.borderColor = isGreen ? 'var(--neon-green)' : 'var(--neon-pink)';

  document.getElementById('feedbackIcon').textContent  = isGreen ? '✅' : '❌';
  document.getElementById('feedbackIcon').style.color  = isGreen ? 'var(--neon-green)' : 'var(--neon-pink)';
  document.getElementById('feedbackTitle').textContent = isGreen ? 'CORRETO!' : 'INCORRETO';
  document.getElementById('feedbackTitle').style.color = isGreen ? 'var(--neon-green)' : 'var(--neon-pink)';
  document.getElementById('feedbackText').innerHTML    = `
    <strong>Explicação:</strong><br>${q.explanation}
    <br><br>
    <strong>Resposta correta:</strong> ${q.options[q.correct]}
  `;

  modal.style.display = 'flex';
}

function nextQuestion() {
  document.getElementById('feedbackModal').style.display = 'none';
  gameState.currentQuestion++;
  loadQuestion();
}

/* ============================================================
   FIM DO JOGO
   ============================================================ */
function endGame() {
  const pct       = Math.round((gameState.correctAnswers / gameState.totalQuestions) * 100);
  const timeSecs  = Math.round((Date.now() - gameState.startTime) / 1000);

  // Atualizar estatísticas globais
  gameState.stats.totalScore += gameState.score;
  gameState.stats.totalGames++;
  if (gameState.streak > gameState.stats.bestStreak)
    gameState.stats.bestStreak = gameState.streak;

  // Conquistas por desempenho
  if (pct === 100) {
    showAchievement('🏆 PERFEITO! 100% de acertos!');
    gameState.stats.achievements++;
  } else if (pct >= 90) {
    showAchievement('⭐ EXCELENTE! Mais de 90% de acertos!');
  } else if (pct >= 70) {
    showAchievement('👍 MUITO BOM! Continue praticando!');
  }

  saveStats();
  updateStatsDisplay();

  const medal = pct >= 90 ? '🥇' : pct >= 70 ? '🥈' : pct >= 50 ? '🥉' : '📖';
  const msg   = pct === 100 ? 'DESEMPENHO PERFEITO! Você domina o assunto! 🎯'
              : pct >= 90   ? 'DESEMPENHO EXCELENTE! Técnico profissional! ⚡'
              : pct >= 70   ? 'BOM DESEMPENHO! Continue estudando! 📚'
              : pct >= 50   ? 'DESEMPENHO MÉDIO. Revise o conteúdo! 📖'
              :               'PRECISA MELHORAR. Estude mais e tente novamente! 💪';

  document.getElementById('gameContent').innerHTML = `
    <div class="results-card">
      <div class="results-icon">${medal}</div>
      <h2 class="results-title">JOGO CONCLUÍDO!</h2>
      <p style="font-size:1.2em; color:var(--text-secondary); margin-bottom:20px;">${msg}</p>
      <div class="results-stats">
        <div class="result-stat">
          <div class="result-stat-value">${gameState.score}</div>
          <div class="result-stat-label">Pontos</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${gameState.correctAnswers}/${gameState.totalQuestions}</div>
          <div class="result-stat-label">Acertos</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${pct}%</div>
          <div class="result-stat-label">Aproveitamento</div>
        </div>
        <div class="result-stat">
          <div class="result-stat-value">${timeSecs}s</div>
          <div class="result-stat-label">Tempo</div>
        </div>
      </div>
      <div class="action-buttons">
        <button class="action-btn primary-btn" onclick="startGame('${gameState.currentGame}')">
          <i class="fas fa-redo"></i> Jogar Novamente
        </button>
        <button class="action-btn secondary-btn" onclick="backToMenu()">
          <i class="fas fa-home"></i> Menu Principal
        </button>
      </div>
    </div>
  `;
}

/* ============================================================
   NAVEGAÇÃO
   ============================================================ */
function backToMenu() {
  if (gameState.timer) clearInterval(gameState.timer);
  document.getElementById('gameScreen').style.display  = 'none';
  document.getElementById('mainMenu').style.display    = 'block';
  document.getElementById('feedbackModal').style.display = 'none';
}
