const quesAndAnswers = [
  ["What is the capital of France?", ["1: Berlin", "2: Madrid", "3: Paris", "4: Rome"], 3],
  ["Who wrote the play 'Romeo and Juliet'?", ["1: William Shakespeare", "2: Charles Dickens", "3: Jane Austen", "4: Mark Twain"], 1],
  ["What is the tallest mountain in the world?", ["1: Mount Everest", "2: K2", "3: Kangchenjunga", "4: Mount Kilimanjaro"], 1],
  ["What is the capital city of Japan?", ["1: Beijing", "2: Seoul", "3: Tokyo", "4: Hanoi"], 3],
  ["Which of the following is the longest river in the world?", ["1: Amazon River", "2: Nile River", "3: Yangtze River", "4: Mississippi River"], 2],
  ["Who painted the Mona Lisa?", ["1: Vincent van Gogh", "2: Pablo Picasso", "3: Leonardo da Vinci", "4: Claude Monet"], 3],
  ["Which country is known as the Land of the Rising Sun?", ["1: China", "2: India", "3: Japan", "4: South Korea"], 3],
  ["What is the smallest country in the world by area?", ["1: Monaco", "2: Vatican City", "3: San Marino", "4: Liechtenstein"], 2],
  ["Who was the first man to walk on the moon?", ["1: Buzz Aldrin", "2: Neil Armstrong", "3: Yuri Gagarin", "4: Michael Collins"], 2],
  ["What is the largest desert in the world?", ["1: Sahara Desert", "2: Gobi Desert", "3: Kalahari Desert", "4: Antarctic Desert"], 4],
  ["Who invented the telephone?", ["1: Alexander Graham Bell", "2: Thomas Edison", "3: Nikola Tesla", "4: James Watt"], 1],
  ["Which planet is known as the Red Planet?", ["1: Venus", "2: Mars", "3: Saturn", "4: Mercury"], 2],
  ["What is the largest ocean on Earth?", ["1: Atlantic Ocean", "2: Indian Ocean", "3: Pacific Ocean", "4: Arctic Ocean"], 3],
  ["Who is the author of the Harry Potter series?", ["1: J.R.R. Tolkien", "2: George R.R. Martin", "3: J.K. Rowling", "4: C.S. Lewis"], 3],
  ["What is the capital of Canada?", ["1: Vancouver", "2: Montreal", "3: Ottawa", "4: Toronto"], 3],
];

const displayScore = function (score) {
  console.log('👉Current Score :' + score + '\n');
}

const displayResult = function (isCorrectAnswer) {
  const message = isCorrectAnswer ? '🟢Correct Answer!' : '🔴Wrong Answer.';
  console.log(message);
}

const displayFinalScore = function (score, total) {
  console.log('Final Score : ' + score + '/' + total);
}

const displayQuestion = function (questionDetails) {
  console.log(questionDetails[0]);
  console.log(questionDetails[1].join('\n'));
}

const validateInput = function () {
  const answer = +prompt('Enter your choice :');
  if (answer < 1 || answer > 4 || isNaN(answer)) {
    console.log('invalid option');
    return validateInput();
  }

  return answer;
}

const shuffle = function (array) {
  return array.sort(function (a, b) { return Math.random() - 0.5 });
}

const quiz = function (quizArray) {
  let score = 0;
  const quizData = shuffle(quizArray);

  return function () {
    for (let quesNum = 0; quesNum < quizData.length; quesNum++) {
      const questionDetails = quizData[quesNum];
      displayQuestion(questionDetails);
      const answer = validateInput();
      const isCorrectAnswer = answer === questionDetails[2];

      if (isCorrectAnswer) {
        score++;
      }

      displayResult(isCorrectAnswer);
      displayScore(score);
    }

    displayFinalScore(score, quizData.length);
  }
}

const startQuiz = quiz(quesAndAnswers);
startQuiz();