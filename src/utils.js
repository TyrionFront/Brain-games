const numsAmplitude = 100;

const getRandomNum = (end = numsAmplitude, start = 1) => Math.floor(Math.random()
  * (end - start) + start);
export default getRandomNum;
