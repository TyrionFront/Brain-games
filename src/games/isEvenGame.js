import readlineSync from 'readline-sync';

const lvlsCount = 3;
const makeQuestion = () => Math.floor(Math.random() * 100 + 1);
const isEven = number => number % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');
const description = 'Answer "yes" if number even otherwise answer "no".\n';
const makeGameLvl = (count, name) => {
  if (count === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const question = makeQuestion();
  console.log(`Question: ${question}`);
  const correctAnswer = makeAnswer(question);
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
