import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';
const calcAmplitude = 3;

const makeQuestionAnswer = () => {
  const [x, y] = [getRandomNum(), getRandomNum()];
  switch (getRandomNum(calcAmplitude)) {
    case 1:
      return [`${x} + ${y}`, String(x + y)];
    case 2:
      return [`${x} - ${y}`, String(x - y)];
    case 3:
      return [`${x} * ${y}`, String(x * y)];
    default:
      break;
  }
  return null;
};

export default () => makeGame(description, makeQuestionAnswer);
