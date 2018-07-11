import readlineSync from 'readline-sync';

const lvlsCount = 3;
const numsAmplitude = 100;

const makeGameLvl = (count, name, getQuestionAnswer) => {
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
    makeGameLvl(newCount, name, getQuestionAnswer);
    return;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
};

export const makeRandom = (start, end = 1) => Math.floor(Math.random() * (start - end) + end);
export const getRandomNum = () => makeRandom(numsAmplitude);

export const makeGame = (description, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const gamerName = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${gamerName} !\n`);
  return makeGameLvl(lvlsCount, gamerName, questionAnswer);
};
