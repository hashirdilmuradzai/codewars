function sum(matrix) {
  // let sum1 = matrix[0][0] + matrix[1][1] + matrix[2][2]
  // let sum2 = matrix[0][2] + matrix[1][1] + matrix[2][0]
​
  let sum1 = 0;
  let sum2 = 0;
​
  for (let i = 0; i < matrix.length; i++) {
    sum1 += matrix[i][i];
    sum2 += matrix[i][matrix.length - i - 1];
  }
​
  const result = sum1 + sum2;
​
  return result;
}