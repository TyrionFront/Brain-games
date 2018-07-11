import { getRandomNum, makeRandom, makeGame } from './gameEngine';

const calcDescription = 'What is the result of the expression?\n';
const calcAmplitude = 3;

const makeQuestionAnswerCalc = () => {
  const [x, y] = [getRandomNum(), getRandomNum()];
  switch (makeRandom(calcAmplitude)) {
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

export default () => makeGame(calcDescription, makeQuestionAnswerCalc);
