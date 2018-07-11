import { num, makeGame } from './isEvenGame';

const getOrder = () => Math.floor(Math.random() * 3 + 1);
const makeOperation = () => {
  const x = num();
  const y = num();
  switch (getOrder()) {
    case 1:
      return `${x} + ${y}`;
    case 2:
      return `${x} - ${y}`;
    case 3:
      return `${x} * ${y}`;
    default:
      return null;
  }
};
const makeRes = (strVal) => {
  const numVal = strVal.split(' ');
  const x = Number(numVal[0]);
  const y = Number(numVal[2]);
  const operation = numVal[1];
  switch (operation) {
    case '+':
      return String(x + y);
    case '-':
      return String(x - y);
    case '*':
      return String(x * y);
    default:
      return null;
  }
};
const gameQuestion = 'What is the result of the expression?\n';

export { getOrder };
export default () => makeGame(makeOperation, makeRes, gameQuestion);
