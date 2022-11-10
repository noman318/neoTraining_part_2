const calci = (a, b) => {
  let sum = 0;
  sum = a + b + b + a;
  return sum;
};
const num1 = 23;
const num2 = 2;
const res = calci(num1, num2);
console.log(num1, " + ", num2, " = ", res);
