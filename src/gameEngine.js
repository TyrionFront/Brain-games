import readlineSync from 'readline-sync';

const levelsCount = 3;

const makeGameLvl = (count, getQuestionAnswer) => {
  if (count === 0) {
    return true;
  }
  const questionAnswer = getQuestionAnswer();
  const question = questionAnswer[0];
  const correctAnswer = questionAnswer[1];
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
  console.log(makeGameLvl(levelsCount, questionAnswer) ? `Congratulations, ${gamerName}!`
    : `Let's try again, ${gamerName}!`);
};

export default makeGame;
