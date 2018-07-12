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
  const question = `${getRandomNum()} ${getRandomNum()}`;
  const [x, y] = question.split(' ');
  return [question, String(calcGcd(x, y))];
};

export default () => makeGame(description, makeQuestionAnswer);
