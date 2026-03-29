# 🎮 Instrutor Matheus — Grau Técnico

> Quiz interativo de Hardware & Manutenção de Computadores com visual cyberpunk, sistema de pontuação e conquistas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 📸 Visão Geral

Plataforma de estudos gamificada voltada para alunos de cursos técnicos de informática. O jogador escolhe um módulo de conhecimento e responde questões de múltipla escolha com feedback explicativo após cada resposta.

---

## 🕹️ Módulos de Jogo

| Módulo | Dificuldade | Descrição |
|---|---|---|
| 🧩 Identificação de Componentes | 🟢 Iniciante | Reconheça peças de hardware |
| 🩺 Diagnóstico de Problemas | 🟡 Intermediário | Troubleshooting de falhas comuns |
| 🔧 Montagem de PC | 🔴 Avançado | Ordem e cuidados na montagem |
| 🔗 Compatibilidade | 🟡 Intermediário | Sockets, DDR, conectores de energia |
| 🛠️ Manutenção | 🔴 Avançado | Limpeza, pasta térmica, temperaturas |
| 🏆 Desafio Profissional | 🔥 Profissional | Timer de 30s por questão |

---

## ✨ Funcionalidades

- **Sistema de pontuação** com bônus por sequência de acertos (streak)
- **Timer** exclusivo no modo Profissional
- **Feedback explicativo** após cada resposta
- **Conquistas** desbloqueáveis (sequências, 100% de acertos)
- **Persistência via localStorage** — placar salvo entre sessões
- **Questões embaralhadas** a cada partida
- **Design responsivo** (mobile-friendly)
- **Partículas animadas** em background

---

## 🗂️ Estrutura do Projeto

```
instrutor-matheus/
├── index.html        # Estrutura HTML e templates
├── src/
│   ├── styles.css    # Estilos (variáveis CSS, animações, responsivo)
│   ├── data.js       # Banco de questões (6 módulos × 5 perguntas)
│   └── game.js       # Lógica do jogo, estado, timer e navegação
└── README.md
```

---

## 🚀 Como Usar

### Opção 1 — Abrir direto no navegador
Não requer servidor. Basta clonar e abrir o `index.html`:

```bash
git clone https://github.com/seu-usuario/instrutor-matheus.git
cd instrutor-matheus
# Abra o index.html no navegador
```

### Opção 2 — Servidor local (recomendado para desenvolvimento)

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Acesse: `http://localhost:8000`

---

## ➕ Como Adicionar Questões

Edite `src/data.js` e adicione objetos ao array do módulo desejado:

```js
{
  q: "Texto da pergunta?",
  options: ["Opção A", "Opção B", "Opção C", "Opção D"],
  correct: 0,           // índice da resposta correta (0 = A)
  explanation: "Explicação exibida após a resposta."
}
```

Para criar um **novo módulo**, adicione uma chave ao objeto `questionsDB` e um card correspondente no `index.html` com `onclick="startGame('chave')"`.

---

## 🛠️ Tecnologias

- HTML5 / CSS3 / JavaScript (Vanilla — sem dependências de framework)
- [Font Awesome 6](https://fontawesome.com/) — ícones
- [Google Fonts](https://fonts.google.com/) — Orbitron + Inter
- `localStorage` — persistência de dados

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

> Desenvolvido por **Matheus** para uso em cursos técnicos de informática. 🖥️
