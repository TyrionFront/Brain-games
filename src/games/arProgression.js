import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'What value is missing in this progression?';

const progressionSize = 10;
const startAmplitude = 1000;
const progressionStart = () => getRandomNum(undefined, startAmplitude);
const progressionStep = () => getRandomNum();

const makeProgression = () => {
  const start = progressionStart();
  const step = progressionStep();

  const iter = (res, count) => {
    if (count === progressionSize) { return res; }
    const value = start + count * step;
    const newRes = [...res, value];
    const newCount = count + 1;
    return iter(newRes, newCount);
  };
  return iter([], 0);
};

const makeQuestionAnswer = () => {
  const newProgression = makeProgression();
  const position = getRandomNum(0, progressionSize);
  const rigthAnswer = String(newProgression.splice(position, 1, '..'));
  const question = `${newProgression}`;
  return [question, rigthAnswer];
};

export default () => makeGame(description, makeQuestionAnswer);
