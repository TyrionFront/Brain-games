import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Balance the given number.';

const makeBalance = (number) => {
  const numsInNumber = String(number).split('');
  const numsInNumberSum = numsInNumber.reduce((acc, num) => acc + Number(num), 0);
  let remainder = numsInNumberSum % numsInNumber.length;
  const avgNum = (numsInNumberSum - remainder) / numsInNumber.length;
  const numFromAvgNums = numsInNumber.map(() => avgNum);

  const balancedNum = numFromAvgNums.reduce((acc, num) => {
    const newNum = remainder > 0 ? num + 1 : num;
    remainder -= 1;
    return newNum + acc;
  }, '');
  return balancedNum;
};

const endLimit = 10000;
const startLimit = 10;
const makeQuestionAnswer = () => {
  const question = getRandomNum(endLimit, startLimit);
  return [question, makeBalance(question)];
};

export default () => makeGame(description, makeQuestionAnswer);
