import readlineSync from 'readline-sync';

const gameCount = 3;
const num = () => Math.floor(Math.random() * 100);
const isEven = val => (val % 2 === 0 ? 'yes' : 'no');
const gameQuestion = 'Answer "yes" if number even otherwise answer "no".\n';

const makeGame = (counter, createVal, makePattern) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameQuestion);
  const name = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${name} !\n`);
  const makeGameLvl = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return null;
    }
    const value = createVal();
    console.log(`Question: ${value}`);
    const pattern = makePattern(value);
    const answer = readlineSync.question('Your answer: ');
    if (pattern === answer) {
      const newCount = count - 1;
      console.log('Correct!');
      return makeGameLvl(newCount);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${pattern}.`);
    console.log(`Let's try again, ${name}!`);
    return null;
  };
  return makeGameLvl(counter);
};

export { num, makeGame };
export default () => makeGame(gameCount, num, isEven);
