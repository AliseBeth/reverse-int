module.exports = function reverse (n) {
  let newNum = '';
  let num = n;
  if (n < 0) {
    num = Math.abs(num);
  }
  let number = String(num);
  for (let i = 0; i < number.length; i++) {
    newNum = `${number[i]}${newNum}`;
  }
  newNum = Number(newNum);
  return newNum;
}
