import readlineSync from 'readline-sync';
import primeNumber from './games/primeNumber';
import makeBalance from './games/makeBalance';
import simpleCalculator from './games/simpleCalc';
import isEven from './games/isEven';
import GCDgame from './games/gcd';
import progression from './games/arithmeticProgression';

const gameNames = ['makeBalance', 'simpleCalculator', 'isEven', 'GCDgame', 'primeNumber', 'progression'];
const games = [makeBalance, simpleCalculator, isEven, GCDgame, primeNumber, progression];

export default () => {
  const gamerName = readlineSync.question('What\'s Ur name, dear guest ?: ');
  console.log(`Hello, ${gamerName} !\n`);
  const gameIndex = readlineSync.keyInSelect(gameNames, 'Choose a game number from the list above:  ');

  return gameIndex !== -1 ? [games[gameIndex], gamerName]
    : [str => console.log(str), `C U next time ! Good luck, ${gamerName}`];
};
