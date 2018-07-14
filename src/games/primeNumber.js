import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Is this number prime?';
const startNum = 1;

const hasNumber = (num, arr) => arr.includes(num);

const makeNumbersRange = size => new Array(size).fill(startNum)
  .map((number, i) => {
    const newNumber = number + i;
    return newNumber;
  });

const findPrimeNums = (numbers, index) => {
  const divider = numbers[index];
  const primeNumsRange = numbers
    .reduce((acc, num) => (num % divider !== 0 || num === divider ? [...acc, num]
      : acc), []);
  const newIndex = index + 1;
  return primeNumsRange.length < numbers.length ? findPrimeNums(primeNumsRange, newIndex)
    : primeNumsRange;
};

const makeQuestionAnswer = () => {
  const question = getRandomNum();
  const primeNums = findPrimeNums(makeNumbersRange(question), startNum);
  const rigthAnswer = hasNumber(question, primeNums) ? 'yes' : 'no';
  return [question, rigthAnswer];
};

export default () => makeGame(description, makeQuestionAnswer);
