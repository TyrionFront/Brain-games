import readlineSync from 'readline-sync';

const levelsCount = 3;

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

const makeGame = (description, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const gamerName = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${gamerName} !\n`);
  return makeGameLvl(levelsCount, gamerName, questionAnswer);
};

export default makeGame;
