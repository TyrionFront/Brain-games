import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number < 2) { return false; }
  const startDivider = 2;
  const noReminderCount = 1;
  const iter = (divider, counter) => {
    if (counter > noReminderCount) { return false; }
    if (number > divider) {
      const newDivider = divider + 1;
      const newCounter = number % divider === 0 ? counter + 1 : counter; 
      return iter(newDivider, newCounter);
    }
    return true;
  };
  return iter(startDivider, noReminderCount);
};

const makeQuestionAnswer = () => {
  const question = getRandomNum();
  const rigthAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rigthAnswer];
};

export default () => makeGame(description, makeQuestionAnswer);
