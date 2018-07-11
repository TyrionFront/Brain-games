import { getRandomNum, makeGame } from './gameEngine';

const isEvenDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => number % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');

const makeQuestionAnswerEven = () => {
  const question = getRandomNum();
  return [question, makeAnswer(question)];
};

export default () => makeGame(isEvenDescription, makeQuestionAnswerEven);
