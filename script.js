// Sample Quiz Questions and Answers
const questions = [
  { question: "which of the following is not a programming language commonly used in web development?", options: ["HTML", "CSS", "PYTHON", "JAVASCRIPT"], answer: "PYTHON" },
  { question: "Which HTML tag is used to define the structure of a table?", options: ["<table>", "<tr>", "<td>", "<th>"], answer: "<table>" },
  { question: "what does CSS stand for?", options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which of the following is NOT a valid CSS unit of measurement?", options: ["px", "em", "cm", "pt"], answer: "cm" },
  { question: "what is a closure in JavaScript?", options: ["A function that returns another function", "A way to create private varaibles in Javascript", "A Combination of a function and the lexical environment withn which that function was declared", "An object that contains methods and properties"], answer: "A Combination of a function and the lexical environment withn which that function was declared" }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const name = document.getElementById('name').value;
  if (name.trim() === '') {
      alert('Please enter your name.');
      return;
  }

  document.querySelector('.container').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  displayQuestion();
}

function displayQuestion() {
  const quizContainer = document.getElementById('quiz');
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.textContent = questions[currentQuestion].question;

  const optionsElement = document.createElement('div');
  optionsElement.classList.add('options');
  questions[currentQuestion].options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
  });

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
      score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
      displayQuestion();
  } else {
      showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById('quiz');
  const resultElement = document.createElement('div');
  resultElement.classList.add('result');
  resultElement.textContent = `Dear ${document.getElementById('name').value}, Your score is ${score} out of ${questions.length}.`;
  quizContainer.innerHTML = '';
  quizContainer.appendChild(resultElement);

  // Add Restart Quiz Button
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Quiz';
  restartButton.onclick = restartQuiz;
  quizContainer.appendChild(restartButton);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('quiz').style.display = 'block';
  displayQuestion();
}

