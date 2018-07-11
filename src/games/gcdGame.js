import readlineSync from 'readline-sync';

const lvlsCount = 3;
const getRandomNum = amplitude => Math.floor(Math.random() * amplitude + 1);
const description = 'Find the greatest common divisor of given numbers.\n';
const numAmplitude = 100;

const calcGcd = (a, b) => {
  if (b === 0) { return a; }
  const t = b;
  const newB = a % b;
  const newA = t;
  return calcGcd(newA, newB);
};

const getQuestionAnswer = () => {
  const qs = `${getRandomNum(numAmplitude)} ${getRandomNum(numAmplitude)}`;
  const [x, y] = qs.split(' ');
  return [qs, String(calcGcd(x, y))];
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
