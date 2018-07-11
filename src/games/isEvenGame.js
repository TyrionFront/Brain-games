import readlineSync from 'readline-sync';

const lvlsCount = 3;
const getRandomNum = amplitude => Math.floor(Math.random() * amplitude + 1);
const numAmplitude = 100;

const isEven = number => number % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');
const description = 'Answer "yes" if number even otherwise answer "no".\n';

const getQuestionAnswer = () => {
  const qs = getRandomNum(numAmplitude);
  return [qs, makeAnswer(qs)];
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
