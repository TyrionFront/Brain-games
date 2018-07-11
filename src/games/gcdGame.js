import { getRandomNum, makeGame } from './gameEngine';

const gcdDescription = 'Find the greatest common divisor of given numbers.\n';

const calcGcd = (a, b) => {
  if (b === 0) { return a; }
  const t = b;
  const newB = a % b;
  const newA = t;
  return calcGcd(newA, newB);
};

const makeQuestionAnswerGcd = () => {
  const question = `${getRandomNum()} ${getRandomNum()}`;
  const [x, y] = question.split(' ');
  return [question, String(calcGcd(x, y))];
};

export default () => makeGame(gcdDescription, makeQuestionAnswerGcd);
