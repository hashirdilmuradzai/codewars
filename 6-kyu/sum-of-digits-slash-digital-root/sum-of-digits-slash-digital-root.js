function digitalRoot(n) {
  if (n < 10) return n;
​
  let firstN = Math.floor(n / 10);
  let lastN = n % 10;
​
  let result = firstN + lastN;
​
  return digitalRoot(result);
}
​