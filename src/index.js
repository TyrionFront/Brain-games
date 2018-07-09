import readlineSync from 'readline-sync';

const sayHi = () => {
    const actual = readlineSync.question('What\'s Ur name, dear guest ?: ');
    console.log(`Hello, ${actual} !`);
};
export default sayHi;