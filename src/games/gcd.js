import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => {
  if (b === 0) { return a; }
  const t = b;
  const newB = a % b;
  const newA = t;
  return calcGcd(newA, newB);
};

const makeQuestionAnswer = () => {
  const x = getRandomNum();
  const y = getRandomNum();
  const question = `${x} ${y}`;
  return [question, String(calcGcd(x, y))];
};

export default () => makeGame(description, makeQuestionAnswer);
