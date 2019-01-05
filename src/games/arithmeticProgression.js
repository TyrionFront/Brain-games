import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'What value is missing in this progression?';

const progressionSize = 10;

const makeProgression = () => {
  const start = getRandomNum();
  const step = getRandomNum();

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
  const rightAnswer = String(newProgression[position]);
  newProgression.splice(position, 1, '..');
  const question = `${newProgression}`;
  return [question, rightAnswer];
};

export default gamerName => makeGame(description, makeQuestionAnswer, gamerName);
