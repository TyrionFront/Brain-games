const getRandomNum = (start = 1, end = 100) => Math.floor(Math.random()
  * (end - start) + start);
export default getRandomNum;
