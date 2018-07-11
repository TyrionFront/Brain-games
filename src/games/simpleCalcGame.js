import readlineSync from 'readline-sync';

const lvlsCount = 3;
const getRandomNum = amplitude => Math.floor(Math.random() * amplitude + 1);
const description = 'What is the result of the expression?\n';
const numAmplitude = 100;
const calcAmplitude = 3;

const getQuestionAnswer = () => {
  const [x, y] = [getRandomNum(numAmplitude), getRandomNum(numAmplitude)];
  switch (getRandomNum(calcAmplitude)) {
    case 1:
      return [`${x} + ${y}`, String(x + y)];
    case 2:
      return [`${x} - ${y}`, String(x - y)];
    case 3:
      return [`${x} * ${y}`, String(x * y)];
    default:
      break;
  }
  return null;
};

const makeGameLvl = (count, name) => {
  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const [question, correctAnswer] = getQuestionAnswer();
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
