import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (a, b) => (b === 0 ? a : calcGcd(b, a % b));

const makeQuestionAnswer = () => {
  const x = getRandomNum();
  const y = getRandomNum();
  const question = `${x} ${y}`;
  return [question, String(calcGcd(x, y))];
};

export default gamerName => makeGame(description, makeQuestionAnswer, gamerName);
