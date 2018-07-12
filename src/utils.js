const numsAmplitude = 100;

const getRandomNum = (start = numsAmplitude, end = 1) => Math.floor(Math.random()
  * (start - end) + end);
export default getRandomNum;
