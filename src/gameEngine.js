import readlineSync from 'readline-sync';

const levelsCount = 3;

const makeGameLvl = (count, getQuestionAnswer) => {
  if (count === 0) {
    return true;
  }
  const [question, correctAnswer] = getQuestionAnswer();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (correctAnswer === answer) {
    const newCount = count - 1;
    console.log('Correct!');
    return makeGameLvl(newCount, getQuestionAnswer);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};

const makeGame = (description, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const gamerName = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${gamerName} !\n`);
  return makeGameLvl(levelsCount, questionAnswer) ? console.log(`Congratulations, ${gamerName}!`)
    : console.log(`Let's try again, ${gamerName}!`);
};

export default makeGame;
