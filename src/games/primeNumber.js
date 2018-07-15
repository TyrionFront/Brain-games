import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) { return false; }
  const startDivider = 2;
  const iter = (divider) => {
    if (number === divider) { return true; }
    if (number % divider === 0) { return false; }
    const newDivider = divider + 1;
    return iter(newDivider);
  };
  return iter(startDivider);
};

const makeQuestionAnswer = () => {
  const question = getRandomNum();
  const rigthAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rigthAnswer];
};

export default () => makeGame(description, makeQuestionAnswer);
