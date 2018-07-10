import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${actual} !\n`);
  const game = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${actual}!`);
      return null;
    }
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const value = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if (answer === value) {
      const newCount = count - 1;
      console.log('Correct!');
      return game(newCount);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${actual}!`);
    return null;
  };
  return game(3);
};
