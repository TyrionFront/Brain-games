import readlineSync from 'readline-sync';

const lvlsCount = 3;
const getNumOrder = () => Math.floor(Math.random() * 3 + 1);
const getRandomNum = () => Math.floor(Math.random() * 100 + 1);
const description = 'What is the result of the expression?\n';
let question;
let correctAnswer;
const getQuestionAnswer = () => {
  const x = getRandomNum();
  const y = getRandomNum();
  switch (getNumOrder()) {
    case 1:
      question = `${x} + ${y}`;
      correctAnswer = String(x + y);
      break;
    case 2:
      question = `${x} - ${y}`;
      correctAnswer = String(x - y);
      break;
    case 3:
      question = `${x} * ${y}`;
      correctAnswer = String(x * y);
      break;
    default:
      break;
  }
};
const makeGameLvl = (count, name) => {
  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  getQuestionAnswer();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    const newCount = count - 1;
    console.log('Correct!');
    makeGameLvl(newCount, name);
    return;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
};

const makeGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const gamerName = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${gamerName} !\n`);
  return makeGameLvl(lvlsCount, gamerName);
};

export default () => makeGame();
