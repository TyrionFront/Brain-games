import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');

const makeQuestionAnswer = () => {
  const question = getRandomNum();
  return [question, makeAnswer(question)];
};

export default gamerName => makeGame(description, makeQuestionAnswer, gamerName);
